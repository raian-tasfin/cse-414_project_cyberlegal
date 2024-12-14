from flask import Blueprint, request, jsonify
from database import connection



register_blueprint = Blueprint('register', __name__)



@register_blueprint.route('/register', methods=['POST'])
def register_user():
    data = request.get_json()
    if data is None:
        return jsonify({
            "status": "error",
            "message": "No JSON data recieved"
        }), 400

    print("Recieved data: ", data)
    if user_exists(data):
        return jsonify({
            "status": "error",
            "message": "User already exists.",
            "data": data
        }), 409

    cursor = connection.cursor()
    cursor.execute(
        "insert into Member values (%s, %s, %s)",
        (data["email"], data["name"], data["password"])
    )
    connection.commit()


    return jsonify({
        "status": "success",
        "message": "User registered successfully",
        "data": data
    }), 200



def user_exists( userData ):
    cursor = connection.cursor()
    cursor.execute(
        "select email from Member where email = %s",
        (userData["email"],)
    )
    cnt = cursor.rowcount
    cursor.close()
    return cnt > 0
