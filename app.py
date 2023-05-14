# save this as app.py
from flask import Flask
from flask import request

from config import add_custom_description
from database import *
from room import *
import qrcode
import os
from gpt import *

app = Flask(__name__)
rooms_dict = { }

def room_to_json(room):
	return "{{ id : {}, users: {} }}\n".format(room.id, str(room.users))

def events_to_json(events):
	return str(list(events.values()))

def key_to_intkey(key):
	return sum(map(ord, list(key)))

@app.route('/event', methods=['POST', 'GET'])
def show_events():
	return str(list(events.values()))

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
	#return app.send_static_file("index.html")
	return redirect(url_for('static/index.html'))

@app.route('/room', methods=['POST', 'GET'])
def show_rooms():
	return str(rooms_dict)

@app.route('/room/<room_id>/<user_id>')
def prijava(room_id, user_id):
	try:
		user_id = int(user_id)
	except:
		return "Invalid user"
	if(user_id >= len(people)):
		return "Invalid user"

	user = people[user_id]
	room_id = key_to_intkey(room_id)

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

@app.route('/rank-events/<room_id>', methods=['POST', 'GET'])
def rank_events(room_id):
	room_id = key_to_intkey(room_id)
	if(room_id not in rooms_dict):
		return "Invalid room"
	room = rooms_dict[room_id]

	attendants = room.users
	calculate_rank(attendants)

	ranked_events = sorted(events.values(), key=lambda x: x.score, reverse=True)

	if add_custom_description:
		for evnt in ranked_events[:3]:
			desc = get_event_description(evnt, attendants)
			if desc[0] == 1:
				evnt.description = desc[1]

	return str(ranked_events)

@app.route("/organize/<room_id>/<event_id>", methods=['POST', 'GET'])
def organize(room_id, event_id):
	try:
		room_id = key_to_intkey(room_id)
		event_id = int(event_id)
	except:
		return "Invalid room or event id."

	if(room_id not in rooms_dict):
		return "Invalid room"
	if(event_id >= len(events)):
		return "Invalid event"

	room = rooms_dict[room_id]
	event = events[event_id]

	##mkay tu zdej ustvarimo seznam in razporeditve
	status, result = gpt_create_arrangement(len(room.users), event.title)
	if(status != 1):
		return "Opa, neki ni ok.\n"
	
	##return result

	##naceloma je result zdej json z raporeditvami, zraven dodamo se kr vse podatke o sobi, tj. osebe
	return "{{ \"users\": {}, \"arrangements\": {}, \"event\": {} }}".format(room.users, result, event)

@app.route("/invite/<room_id>/<event_id>/<user_id>", methods=['POST', 'GET'])
def invite(room_id, event_id, user_id):
	try:
		room_id = key_to_intkey(room_id)
		event_id = int(event_id)
	except:
		return "Invalid room or event id."

	if(room_id not in rooms_dict):
		return "Invalid room"
	if(event_id >= len(events)):
		return "Invalid event"
	try:
		user_id = int(user_id)
	except:
		return "Invalid user"
	if(user_id >= len(people)):
		return "Invalid user"

	user = people[user_id]
	room = rooms_dict[room_id]
	event = events[event_id]

	status, result = gpt_create_invitation(user.name, event.title, event.date)
	if(status != 1):
		return "Opa, neki ni ok.\n"
	return result

