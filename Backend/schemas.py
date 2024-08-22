from pydantic import BaseModel

class UserCreate(BaseModel):
    name: str
    email: str
    password: str
    age: int

class UserLogin(BaseModel):
    email: str
    password: str

class Image(BaseModel):
    arrL: list
    arr: bytes 