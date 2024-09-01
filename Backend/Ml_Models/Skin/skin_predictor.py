import pickle
import numpy as np
from core.image_processing import preprocess_skin_disease_image

def skin_predictor(image_file):

    pickle_in = open('best_model_accuracy_74_v1.pkl', 'rb')
    best_model = pickle.load(pickle_in)

    with open(image_file, 'r') as file:
            img_array = preprocess_skin_disease_image('07RosaceaOK0828063.jpg')
        
    prediction = best_model.predict(img_array, batch_size = 1)
    #prediction_list = prediction.tolist()
        # Convert prediction to a list so it's JSON serializable
        
    score = tf.nn.softmax(prediction[0])

    class_names = ['acne', 'actinic', 'melonama']

    return {"prediction": class_names[np.argmax(score)]}