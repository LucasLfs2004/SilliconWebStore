from typing import Union

from fastapi import FastAPI

from fastapi.middleware.cors import CORSMiddleware
import mysql.connector

app = FastAPI()


mysql_host = "127.0.0.1:3306"
mysql_user = "root"
mysql_password = "root"
mysql_db = "sillicon_store"

mysql_connection = mysql.connector.connect(
    host=mysql_host,
    user=mysql_user,
    password=mysql_password,
    database=mysql_db
)

origins = [
    "http://localhost:3000",  # Adicione a URL do seu aplicativo ReactJS aqui
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def read_root():
    return {"Hello": "World"}


@app.get("/items/{item_id}")
def read_item(item_id: int, q: Union[str, None] = None):
    return {"item_id": item_id, "Nome": "Lucas Ferreira Silva"}


if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
