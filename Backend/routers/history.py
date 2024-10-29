
from fastapi import APIRouter, Depends, status, Response, HTTPException, Header
from schemas import UserDetails, HistoryD
from database import get_db
from models.base import History
from sqlalchemy.orm import Session 
from middleware.auth_middleware import auth_middleware
import uuid

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
    

@router.post('/add', status_code=200)    
def post_history(history: HistoryD, db: Session = Depends(get_db)):
    print(history.user_id, history.path, history.date, history.diagnosis)
    # Create a new History entry
    new_history = History(
        history_id=str(uuid.uuid4()),
        user_id=history.user_id,
        path=history.path,
        date=history.date,
        diagnosis=history.diagnosis
    )

    
    db.add(new_history)
    db.commit()
    db.refresh(new_history)

    # Return the created history entry as a confirmation
    return {"message": "History record added successfully", "history": new_history}