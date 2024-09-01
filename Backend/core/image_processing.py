

def preprocess_skin_disease_image(img_path):
    # Load the image and preprocess it to (240, 240, 3)
    # img = image.load_img(img_path, target_size=(224, 224))  # Updated target_size
    # img_array = image.img_to_array(img)
    # img_array = np.expand_dims(img_array, axis=0)
    # img_array = img_array / 255.0  # Normalize the image if required by your model
    img = cv2.imread(img_path)
    img = cv2.resize(img,(224,224))

    img = np.expand_dims(img, axis=0)
    return img