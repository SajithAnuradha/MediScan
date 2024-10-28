from fastapi import APIRouter, Depends, status, Response, HTTPException, Header
from schemas import UserDetails
from database import get_db
from models.base import History
from sqlalchemy.orm import Session 
from middleware.auth_middleware import auth_middleware

router = APIRouter(
    prefix='/history',
    tags=['history']
)

@router.post('/', status_code=200)
def get_history(user: UserDetails, db: Session=Depends(get_db)): #dependency. DB called before anything. DB gets closed after that.

    # print(user.user_id)
    # print(db.query(History).all())
    user_history = db.query(History).filter(History.user_id == user.user_id).all()

    # Return user history if found, otherwise return a message
    if user_history:
        return user_history
    else:
        return {"message": "No history records found for this user"}