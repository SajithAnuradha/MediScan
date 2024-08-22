from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy import TEXT, VARCHAR, Column, LargeBinary, Integer
from sqlalchemy.orm import relationship

Base = declarative_base()

# class User(Base):
#     __tablename__ = 'users'

#     user_id = Column(TEXT, primary_key=True)
#     name = Column(VARCHAR(100))
#     email = Column(VARCHAR(100))
#     password = Column(LargeBinary)
#     age = Column(Integer)

class Record(Base):
    __tablename__ = 'records'

    record_id = Column(TEXT, primary_key=True)
    date = Column(TEXT)
    description = Column(TEXT, primary_key=True)

class User(Base):
    __tablename__ = 'users'

    user_id = Column(TEXT, primary_key=True)
    name = Column(VARCHAR(100))
    email = Column(VARCHAR(100))
    password = Column(LargeBinary)
    age = Column(Integer)