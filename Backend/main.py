from fastapi import FastAPI
from routers import disease_detection, auth
from models.base import Base
from database import engine

app = FastAPI()

app.include_router(disease_detection.router)
app.include_router(auth.router)

Base.metadata.create_all(engine)