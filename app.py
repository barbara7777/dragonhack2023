# save this as app.py
from flask import Flask
from flask import request
from database import *
from room import *
import qrcode
import os

app = Flask(__name__)
rooms_dict = { }

def room_to_json(room):
	return "{{ id : {}, users: {} }}\n".format(room.id, str(room.users))
def key_to_intkey(key):
	return sum(map(ord, list(key)))

@app.route('/cleanup')
def cleanup():
	for elt in os.listdir("static"):
		os.remove("static/" + elt)
	return "OK"

@app.route('/qr/<id>')
def qr_codes(id):
	id = key_to_intkey(id)
	#print("qr access {}".format(id))
	img_src = "{}.png".format(id)
	return app.send_static_file(img_src)

@app.route('/', methods=['POST', 'GET'])
def home():
	return "<button>Ustvari sobo</button>"


@app.route('/room', methods=['POST', 'GET'])
def show_rooms():
	return str(rooms_dict)

@app.route('/room/<room_id>', methods=['POST', 'GET'])
def prijava(room_id):
	room_id = key_to_intkey(room_id)

	if "user" not in request.form:
		return "Invalid user"
	user_id = int(request.form["user"])
	user = people[user_id]

	#ce soba ne obstaja jo naredi
	if(room_id not in rooms_dict):
		qr_content = "route/{}".format(room_id) #qr code content
		qr_code_img = qrcode.make(qr_content)
		qr_code_img.save("static/{}.png".format(room_id))

		new_room = Room(room_id, [])
		rooms_dict[new_room.id] = new_room

	room = rooms_dict[room_id]
	if(user not in room.users):
		room.users.append(user)

	return room_to_json(room)


@app.route('/rank-event/<room_id>', methods=['POST', 'GET'])
def rank_events(room_id):
	room_id = key_to_intkey(room_id)
	if(room_id not in rooms_dict):
		return "Invalid room"
	room = rooms_dict[room_id]

	attendants = room.users
	calculate_rank(attendants)

