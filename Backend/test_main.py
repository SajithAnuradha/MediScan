from fastapi.testclient import TestClient
from main import app

client = TestClient(app)

def test_skin():
    # Open the image file in binary mode
    with open(r"uploads\actinic-keratosis-5FU-19.jpg", "rb") as image_file:
        # Simulate a file upload by posting to the '/skin' endpoint
        response = client.post("/skin", files={"file_upload": ("path_to_your_image.jpg", image_file, "image/jpeg")})

    # Verify the response (adjust according to the actual API response format)
    assert response.status_code == 200
    assert response.json() in ['acne', 'actinic', 'melanoma']  # Assuming these are possible outcomes

def test_mri():
    # Open the image file in binary mode
    with open(r"uploads\aug_No22_0_9819.jpg", "rb") as image_file:
        # Simulate a file upload by posting to the '/skin' endpoint
        response = client.post("/mri", files={"file_upload": ("path_to_your_image.jpg", image_file, "image/jpeg")})

    # Verify the response (adjust according to the actual API response format)
    assert response.json() in ['True', 'False']  # Assuming these are possible outcomes

def test_ct():
    # Open the image file in binary mode
    with open(r"uploads\squamous.cell.carcinoma.png", "rb") as image_file:
        # Simulate a file upload by posting to the '/skin' endpoint
        response = client.post("/ct", files={"file_upload": ("path_to_your_image.jpg", image_file, "image/jpeg")})

    # Verify the response (adjust according to the actual API response format)
    assert response.json() in ['adenocarcinoma', 'large-cell-carcinoma', 'normal', 'squamous-cell-carcinoma']  # Assuming these are possible outcomes