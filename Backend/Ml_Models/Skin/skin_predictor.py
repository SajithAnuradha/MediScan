import pickle
import numpy as np
#from core.image_processing import preprocess_skin_disease_image
import tensorflow as tf
from tensorflow.keras.preprocessing import image


def result_skin(model,image):
  
    prediction=model.predict(image, batch_size = 1)

    score = tf.nn.softmax(prediction[0])

    class_names = ['acne', 'actinic', 'melonama']

    return class_names[np.argmax(score)]



def preprocess_skin_image(img_path):
    # Load the image and preprocess it to (240, 240, 3)
    
    img = image.load_img(img_path, target_size=(224, 224))  # Updated target_size
    img_array = image.img_to_array(img)
    img_array = np.expand_dims(img_array, axis=0)
    img_array = img_array / 255.0  # Normalize the image if required by your model
    return img_array

# def skin_predictor(image_file):

#     with open ('best_model_accuracy_74_v1.pkl', 'rb') as file:
#         if file:
#             print('y')
#         else:
#             print('n')
#     pickle_in = open('best_model_accuracy_74_v1.pkl', 'rb')
#     best_model = pickle.load(pickle_in)

#     with open(image_file, 'r') as file:
#             img_array = preprocess_skin_disease_image(image_file)
        
#     prediction = best_model.predict(img_array, batch_size = 1)
#     #prediction_list = prediction.tolist()
#         # Convert prediction to a list so it's JSON serializable
        
#     score = tf.nn.softmax(prediction[0])

#     class_names = ['acne', 'actinic', 'melonama']

#     return {"prediction": class_names[np.argmax(score)]}