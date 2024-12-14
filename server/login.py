from flask import Blueprint, request, jsonify
from database import connection
import secrets
import datetime


login_blueprint = Blueprint('login', __name__)
sessions = {}



@login_blueprint.route('/login', methods=['POST'])
def login_user():
    data = request.get_json()
    if data is None:
        return jsonify({
            "status": "error",
            "message": "No JSON data received"
        }), 400

    print("Received data: ", data)

    email = data.get("email")
    password = data.get("password")

    if not email or not password:
        return jsonify({
            "status": "error",
            "message": "Email and password are required"
        }), 400

    # Check if user exists and password matches
    cursor = connection.cursor()
    cursor.execute(
        "select password from Member where email = %s",
        (email,)
    )
    result = cursor.fetchone()
    cursor.close()

    if not result:
        # No user found with the given email
        return jsonify({
            "status": "error",
            "message": "Invalid credentials"
        }), 401

    stored_password = result[0]
    if stored_password != password:
        # Password mismatch
        return jsonify({
            "status": "error",
            "message": "Invalid credentials"
        }), 401

    # Login successful
    # Generate session token
    token = secrets.token_hex(16)
    expirationTime = datetime.datetime.utcnow() + datetime.timedelta(hours=5)
    sessions[token] = {
        "email": email,
        "expires_at": expirationTime
    }


    return jsonify({
        "status": "success",
        "message": "Login successful",
        "data": {"token": token}
    }), 200
