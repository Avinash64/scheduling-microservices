from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.background import BackgroundTasks
from redis_om import get_redis_connection, HashModel
from starlette.requests import Request
import requests, time, uuid

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=['*'],
    allow_methods=["*"],
    allow_headers=['*']
)



database = {}
class_name = "sites"
fields = ['address', 'capacity'] 

def save(db, item):
    db[item["item_id"]] = item
    return item["item_id"]

def create_id():
    return str(uuid.uuid4())

@app.get("/")
async def all():
    return list(database.values())

@app.get("/{item_id}")
async def get(item_id:str):
    if(item_id in database.keys()):
        return database[item_id]
    else:
        return "Bruh"


@app.post("/")
async def make(request: Request):
    body = await request.json()
    item_id = create_id()
    if set(body.keys()) == set(fields):
        body["item_id"] = item_id
        print(body)
        print(database)
        return save(database, body)
    else:
        return {"error":f"Fields must be {fields} - Your fields are {set(body)}"}

@app.put("/")
async def put(request: Request):
    body = await request.json()
    save(database, body)
    database[body["item_id"]] = body
    print(database)
    return database[body["item_id"]]


@app.delete("/{item_id}")
def delete(item_id:str):
    return database.pop(item_id)


