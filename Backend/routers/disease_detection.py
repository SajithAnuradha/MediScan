from fastapi import APIRouter, Depends, status, Response, HTTPException
from schemas import Image
from ml_models.Skin.skin_predictor import skin_predictor
from fastapi import APIRouter, File, UploadFile, HTTPException, Depends
from sqlalchemy.orm import Session
from pydantic import BaseModel
import io
from PIL import Image
from ml_models.BrainTumour.brain_tumour_model import preprocess_image,result
from tensorflow.keras.utils import img_to_array


router = APIRouter(
    prefix='/detection',
    tags=['disease_detection']
)

@router.post('/brain')
async def detection(file:bytes=File(...)):
    
    image=Image.open(io.BytesIO(file))
    image_array = img_to_array(image)
    image_array = image_array / 255.0  # Normalize the image if required by your model
    print(result(image_array))
    # print(image_array)    
    return ""




    

   
    

