import sqlite3

connection = sqlite3.connect('database.db')

cursor = connection.cursor()

create_table_users = "CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY, username text, password text)"
cursor.execute(create_table_users)

user = (1,'admin','admin')
insert_query = "INSERT INTO users VALUES (?,?,?)"
cursor.execute(insert_query,user)

connection.commit()

connection.close()