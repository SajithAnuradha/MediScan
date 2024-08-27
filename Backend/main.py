from fastapi import FastAPI, Request, HTTPException
from fastapi.responses import JSONResponse
from routers import disease_detection, auth
from models.base import Base
from database import engine

app = FastAPI()

app.include_router(disease_detection.router)
app.include_router(auth.router)

Base.metadata.create_all(engine)

# Custom 404 error handler
@app.exception_handler(404)
async def not_found_error_handler(request: Request, exc: Exception):
    return JSONResponse(
        status_code=404,
        content={"detail": "The requested resource was not found."}
    )

# Custom 500 error handler
@app.exception_handler(Exception)
async def internal_server_error_handler(request: Request, exc: Exception):
    # Log the exception or handle it as needed
    # You can use Python's logging module to log the error details if needed
    return JSONResponse(
        status_code=500,
        content={"detail": "An unexpected error occurred. Please try again later."}
    )
