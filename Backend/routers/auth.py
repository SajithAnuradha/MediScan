from fastapi import APIRouter, Depends, status, Response, HTTPException, Header
from schemas import UserCreate, UserLogin
from database import get_db
from models.base import User
from sqlalchemy.orm import Session 
import uuid
import bcrypt
import jwt
from middleware.auth_middleware import auth_middleware

router = APIRouter(
    prefix='/auth',
    tags=['authentication']
)

@router.post('/signup', status_code=201)
def signup(user: UserCreate, db: Session=Depends(get_db)): #dependency. DB called before anything. DB gets closed after that.

    user_db = db.query(User).filter(User.email == user.email).first()

    if user_db:
        raise HTTPException(400, 'User with the same email already exists!')
        
    
    hased_pw = bcrypt.hashpw(user.password.encode(), bcrypt.gensalt())
    user_db = User(user_id=str(uuid.uuid4()), email=user.email, password=hased_pw, name=user.name, age=user.age)

    db.add(user_db)
    db.commit()
    db.refresh(user_db) #refreshes attributes in a particular instance
    return user_db

@router.post('/login')
def login(user: UserLogin, db: Session=Depends(get_db)):

    user_db = db.query(User).filter(User.email == user.email).first()

    if not user_db:
        raise HTTPException(400, "User doesn't exist" )

    is_match = bcrypt.checkpw(user.password.encode(), user_db.password)
    
    if not is_match:
        raise HTTPException(400, "Incorrect passowrd!" )
    
    token = jwt.encode({'id': user_db.user_id}, 'password_key')  #put password_key in env file

    return {'token': token, 'user': user_db}

@router.get('/')
def current_user_data(db: Session=Depends(get_db), user_dict = Depends(auth_middleware)):
    user = db.query(User).filter(User.user_id == user_dict['uid']).first()

    if not user:
        raise HTTPException(404, 'User not found!')
    
    return user
  

    
    