# save this as app.py
from flask import Flask
from flask import request
import database
import room

app = Flask(__name__)

rooms_dict = { "soba1" : "mashina" }

def room_to_json(room):
	return "room : { }"


@app.route('/')
def home():
	return "<button>Ustvari sobo</button>"

@app.route('/room/<room_id>', methods=['POST', 'GET'])
def prijava(room_id):
	if(room_id in rooms_dict):
		return room_to_json(rooms_dict[room_id])
	
	#new_room = new
		#tu generiramo nobo sobo in jo damo v dict.	Lahko se naredi qr coda, ...
		#mogoce ... nastavimo trenutno osebo na moderatoraj
		#oseba pa dobimo ven iz requesta.

	return "Kulči"

	#pogledas ali je oseba ze v sobi, ce se ni, dodamo. To je to.




"""
	error = None
	if request.method == 'POST':
		print(request.form)
	else:
		print("GET")
	return "OK"
"""
