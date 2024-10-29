from datetime import datetime
from fastapi import FastAPI, Form, Request, HTTPException
from fastapi.responses import JSONResponse
from routers import disease_detection, auth, history
from models.base import Base
from database import engine
from fastapi.middleware.cors import CORSMiddleware
from tensorflow.keras.models import load_model
from fastapi import APIRouter, File, UploadFile, HTTPException, Depends
from tensorflow.keras.utils import img_to_array
import io
from PIL import Image
from pathlib import Path
from ml_models.BrainTumour.brain_tumour_model import preprocess_image,result
from ml_models.Skin.skin_predictor import preprocess_skin_image, result_skin
from ml_models.CT.ct_predictor import preprocess_ct_image, result_ct
from models.base import History
from schemas import HistoryModel
from database import get_db
from sqlalchemy.orm import Session 

UPLOAD_DIR=Path()/'uploads'

app = FastAPI()

best_model_mri = load_model(filepath='cnn-parameters-improvement-02-0.87.keras')
best_model_skin = load_model(filepath='skin-cnn-parameters-improvement-46.keras')
best_model_ct = load_model(filepath='best_model_resnet.h5.keras')

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Adjust this to restrict the allowed origins
    allow_credentials=True,
    allow_methods=["*"],  # This allows all methods (GET, POST, OPTIONS, etc.)
    allow_headers=["*"],  # This allows all headers
)
# app.include_router(disease_detection.router)
app.include_router(auth.router)
app.include_router(history.router)

# def post_history(user_id: str, image_path: str, diagnosis: str, db: Session = Depends(get_db)):
#     # Create a new History entry
#     print("hi")
#     current_date = '2021/02/34'
#     current_date_str = current_date

#     new_history = History(
#         user_id=user_id,
#         path=image_path,
#         date=current_date_str,
#         diagnosis=diagnosis
#     )

#     # Add the new record to the session and commit
#     db.add(new_history)
#     db.commit()
#     db.refresh(new_history)

#     # Return the created history entry as a confirmation
#     return {"message": "History record added successfully", "history": new_history}

@app.post('/skin')
async def detection(file_upload:UploadFile):

    data=await file_upload.read()
    save_to=UPLOAD_DIR/file_upload.filename
    with open(save_to,'wb') as f:
        f.write(data)
    print(save_to)
    pre=preprocess_skin_image(save_to)
    response=result_skin(best_model_ct,pre)
    print(response)
    return(response)


@app.post('/mri')
async def detection(file_upload:UploadFile):
    print('/mri')
    
    data=await file_upload.read()
    save_to=UPLOAD_DIR/file_upload.filename
    print(save_to)
    
    with open(save_to,'wb') as f:
        f.write(data)
    print(save_to)
    pre=preprocess_image(save_to)
    
    response=result(best_model_mri,pre)
    print(response)
    # # print(m)
    if (response[0] >0.5):
        hist = HistoryModel(path=str(save_to), diagnosis="True", date="2024-10-29")
        print(hist)
        return hist
    
    else :
        hist = HistoryModel(path=str(save_to), diagnosis="False", date="2024-10-29")
        print(hist)
        return hist



  
@app.post('/ct')
async def detection(file_upload:UploadFile):

    data=await file_upload.read()
    save_to=UPLOAD_DIR/file_upload.filename
    with open(save_to,'wb') as f:
        f.write(data)
    print(save_to)
    pre=preprocess_ct_image(save_to)
    response=result_ct(best_model_skin,pre)
    print(response)
    return(response)

Base.metadata.create_all(engine)

# Custom 404 error handler
@app.exception_handler(404)
async def not_found_error_handler(request: Request, exc: Exception):
    return JSONResponse(
        status_code=404,
        content={"detail": "The requested resource was not found."}
    )

# Custom 500 error handler
@app.exception_handler(Exception)
async def internal_server_error_handler(request: Request, exc: Exception):
    # Log the exception or handle it as needed
    # You can use Python's logging module to log the error details if needed
    return JSONResponse(
        status_code=500,
        content={"detail": "An unexpected error occurred. Please try again later."}
    )
