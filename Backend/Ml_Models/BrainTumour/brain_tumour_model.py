# Load the model once at startup
from fastapi import FastAPI, HTTPException
import uvicorn
from tensorflow.keras.models import load_model
from tensorflow.keras.preprocessing import image
import numpy as np



def result (model,image):
    
    result=model.predict(image)
    return result




def preprocess_image(img_path):
    # Load the image and preprocess it to (240, 240, 3)
    
    img = image.load_img(img_path, target_size=(240, 240))  # Updated target_size
    img_array = image.img_to_array(img)
    img_array = np.expand_dims(img_array, axis=0)
    img_array = img_array / 255.0  # Normalize the image if required by your model
    return img_array