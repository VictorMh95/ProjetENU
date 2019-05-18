from flask import Flask,request
from flask_restful import Resource, Api
from flask_jwt import JWT,jwt_required
from flask_cors import CORS

from security import authentificate,identity
from user import UserRegister

app = Flask(__name__)
CORS(app)
app.secret_key = 'secret' 
api = Api(app)

jwt = JWT(app,authentificate,identity ) #create a new endpoint /auth

@app.route('/')
def home():
    return 'API HOME'



api.add_resource(UserRegister, '/register')

if __name__ == '__main__':
    app.run(port=5000)