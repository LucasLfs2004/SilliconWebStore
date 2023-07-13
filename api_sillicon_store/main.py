from typing import Union

from fastapi import FastAPI

from fastapi.middleware.cors import CORSMiddleware
import mysql.connector

app = FastAPI()


mysql_host = "mysql://3306/sillicon_store"
mysql_user = "root"
mysql_password = "root"
mysql_db = "sillicon_store"

mysql_connection = mysql.connector.connect(
    user=mysql_user,
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

@app.get("/produtos")
def get_produtos():
    cursor = mysql_connection.cursor(dictionary=True)
    cursor.execute("SELECT * FROM produtos")
    produtos = cursor.fetchall()
    cursor.close()
    return produtos

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
