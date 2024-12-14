from flask import Flask, request, jsonify
from flask_cors import CORS
from register import register_blueprint
from login import login_blueprint



app = Flask(__name__)
CORS(app)



app.register_blueprint(register_blueprint)
app.register_blueprint(login_blueprint)



if __name__ == '__main__':
    app.run(debug=True)
