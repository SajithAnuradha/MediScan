import pickle
import numpy as np
#from core.image_processing import preprocess_skin_disease_image
import tensorflow as tf
from tensorflow.keras.preprocessing import image


def result_ct(model,image):
  
    prediction=model.predict(image, batch_size = 1)

    score = tf.nn.softmax(prediction[0])

    class_names =  ['adenocarcinoma', 'large-cell-carcinoma', 'normal', 'squamous-cell-carcinoma']

    output = 'Result is ' + class_names[np.argmax(score)] 

    return output



def preprocess_ct_image(img_path):
    # Load the image and preprocess it to (240, 240, 3)
    
    img = image.load_img(img_path, target_size=(224, 224))  # Updated target_size
    img_array = image.img_to_array(img)
    img_array = np.expand_dims(img_array, axis=0)
    img_array = img_array / 255.0  # Normalize the image if required by your model
    return img_array