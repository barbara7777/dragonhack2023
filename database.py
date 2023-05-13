import json


class Event:
	id = 0
	title = ""
	description = ""
	date = ""
	time = ""
	location = ""
	score = 0
	co2 = 0  # in kg

	def __init__(self, id, title, description, date, time, location, score, co2):
		self.id = id
		self.title = title
		self.description = description
		self.date = date
		self.time = time
		self.location = location
		self.score = score
		self.co2 = co2

	def __str__(self):
		return json.dumps(self.__dict__)

	def __repr__(self):
		return self.__str__()

class Person:
	id = 0
	name = ""
	image = ""
	email = ""
	phone = ""
	timetable = []
	location = ""
	preferences = []
	hates = []

	def __init__(self, id, name, img, email, phone, timetable, location, preferences, hates):
		self.id = id
		self.name = name
		self.image = img
		self.email = email
		self.phone = phone
		self.timetable = timetable
		self.location = location
		self.preferences = preferences
		self.hates = hates

	def __str__(self):
		return json.dumps(self.__dict__)

	def __repr__(self):
		return self.__str__()

# ----------------------------------------------------------------------

person1 = Person(0,
				 "Matic",
				 "person1.jpg",
				 "matic.hocevar@gmail.com",
				 "031 123 456",
				 ["monday", "tuesday", "friday"],
				 "46.067100, 14.491936",
				 ["cinema", "hanging by the river"],
				 ["balls"])

person2 = Person(1,
				 "Vilma",
				 "person5.jpg",
				 "vilma1999@gmail.com",
				 "031 654 321",
				 ["friday", "saturday", "sunday"],
				 "46.050547, 14.466705",
				 ["cookies", "disco", "zoo"],
				 ["horses"])

person3 = Person(2,
				 "Majda",
				 "person3.jpg",
				 "majdi-unicorn37@gmail.com",
				 "031 123 456",
				 ["monday", "tuesday", "friday", "satuday", "sunday"],
				 "46.036786, 14.488854",
				 ["horse riding", "hanging by the river", "cinema", "trampolines"],
				 ["disco", "heights"])

person4 = Person(3,
				 "Bojan",
				 "person6.jpg",
				 "bojan.razkrosi@hotmail.com",
				 "031 123 456",
				 ["monday", "tuesday", "wednesday", "satuday", "sunday"],
				 "46.138015, 14.558444",
				 ["horse riding", "cookies", "trampolines"],
				 ["water"])

# ----------------------------------------------------------------------

event1 = Event(0,
			   "Horse riding",
			   "Horse riding in the forest",
			   "monday",
			   "12:00",
			   "46.086078, 14.416741",
			   5,
			   6)

event2 = Event(1,
			   "Hanging by the river",
			   "Let's meet by the Ljubljanica river and have a picnic.",
			   "friday",
			   "18:00",
			   "46.041514, 14.513523",
			   7,
			   0)

event3 = Event(2,
			   "Cinema",
			   "Avatar 2",
			   "wednesday",
			   "20:00",
			   "46.022171255080806, 14.536462000016206",
			   8,
			   8)

event4 = Event(3,
			   "Disco",
			   "Let's get crazy. YOLO",
			   "friday",
			   "22:00",
			   "46.05592740593597, 14.504080196029753",
			   6,
			   17)

event5 = Event(4,
			   "Baking party",
			   "Let's meet at my house and bake cookies",
			   "saturday",
			   "16:00",
			   "46.067100, 14.491936",
			   6,
			   1)

people = {0: person1, 1: person2, 2: person3, 3: person4}
events = {0: event1, 1: event2, 2: event3, 3: event4, 4: event5}
