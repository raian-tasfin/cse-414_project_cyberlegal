import os
import psycopg2
from psycopg2 import sql



psql_user = os.getenv('psql_user')
psql_db = os.getenv('psql_db')
psql_password = os.getenv('psql_password')


connection = None



try:
    connection = psycopg2.connect(
        dbname=psql_db,
        user=psql_user,
        password=psql_password,
        host='localhost',
        port=5432
    )

    cursor = connection.cursor()

    cursor.execute("select version();")
    db_version = cursor.fetchone()
    print(f"Connected to the database:\n{db_version[0]}")

    cursor.close()

except Exception as e:
    print(f"An error occurred: {e}")
