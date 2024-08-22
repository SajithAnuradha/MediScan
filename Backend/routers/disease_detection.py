from fastapi import APIRouter, Depends, status, Response, HTTPException
from schemas import Image
from ml_models.Skin.skin_predictor import skin_predictor 

router = APIRouter(
    prefix='/detection',
    tags=['disease_detection']
)

@router.post('/skin')
def detection(image_file='07RosaceaOK0828063.jpg'):
    try:
        # img_array = preprocess_skin_disease_image('07RosaceaOK0828063.jpg')
        return skin_predictor(image_file)

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
 