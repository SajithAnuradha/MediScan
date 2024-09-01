from fastapi import FastAPI, Request, HTTPException
from fastapi.responses import JSONResponse
from routers import disease_detection, auth
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

UPLOAD_DIR=Path()/'uploads'

app = FastAPI()

best_model = load_model(filepath='cnn-parameters-improvement-02-0.87.keras')

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Adjust this to restrict the allowed origins
    allow_credentials=True,
    allow_methods=["*"],  # This allows all methods (GET, POST, OPTIONS, etc.)
    allow_headers=["*"],  # This allows all headers
)
# app.include_router(disease_detection.router)
# app.include_router(auth.router)






@app.post('/brain')
async def detection(file_upload:UploadFile):
    print('hi')
    data=await file_upload.read()
    save_to=UPLOAD_DIR/file_upload.filename
    with open(save_to,'wb') as f:
        f.write(data)
    print(save_to)
    pre=preprocess_image(save_to)
    response=result(best_model,pre)
    print(response)
  
    return ""

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
