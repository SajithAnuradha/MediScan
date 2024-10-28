from pydantic import BaseModel

class UserCreate(BaseModel):
    name: str
    email: str
    password: str
    age: int
    phonenumber:str
    gender:str
    

class UserLogin(BaseModel):
    email: str
    password: str

class Image(BaseModel):
    arrL: list
    arr: bytes 

class History(BaseModel):
    user_id: str
    diagnosis: str
    date: str
    #image: 

class UserDetails(BaseModel):
    user_id: str