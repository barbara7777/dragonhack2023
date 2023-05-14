import json


class Event:
	id = 0
	title = ""
	description = ""
	date = ""
	time = ""
	location = ""
	address = ""
	score = 0
	co2 = 0  # in kg

	def __init__(self, id, title, description, date, time, location, address, score, co2):
		self.id = id
		self.title = title
		self.description = description
		self.date = date
		self.time = time
		self.location = location
		self.address = address
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
			   "Horse Riding",
			   "Saddle up for a thrilling Horse Riding event! 🐎 Matic, Majda, and Bojan, get ready to hang by the river and explore nature while riding these majestic creatures. Perfect for cinema lovers seeking an epic outdoor adventure and trampoline enthusiasts craving a new bounce. Vilma, we're sorry, but this one isn't for you due to your horse dislike. For the rest, RSVP and join us for an unforgettable ride. Giddy up! 🌳🐴",
			   "Monday",
			   "12:00",
			   "46.03975372396684, 14.561978611237313",
			   "Trim otok Hrušica/pod Golovcem",
			   5,
			   6)

event2 = Event(1,
			   "Hanging by the river",
			   "Get ready for a thrilling and entertaining event - Hanging by the River! 🌊 Join Matic, Vilma, Majda, and Bojan as they chill riverside, indulge in their shared interests, and create lasting memories. This is your chance to bond over your mutual love for the cinema🎦, enjoy some tasty cookies🍪, and perhaps even try horse riding🐎 or trampolining!\n\nNot a fan of balls or horses? No worries, we've got the perfect environment planned for you. Say \"nay\" to horses🐴 and dance the disco beats away! With the calming sound of flowing water as your backdrop, you'll surely want to dive into the fun. So, why hesitate? Join us for an amazing day of Hanging by the River, and let the good times roll! 🎉",
			   "Friday",
			   "18:00",
			   "46.041514, 14.513523",
			   "Ljubljanski botanični vrt",
			   7,
			   0)

event3 = Event(2,
			   "Cinema",
			   "Avatar 2",
			   "Wednesday",
			   "20:00",
			   "46.022171255080806, 14.536462000016206",
			   "Cineplexx Supernova Rudnik",
			   8,
			   8)

event4 = Event(3,
			   "Disco",
			   "Let's get crazy. YOLO",
			   "Friday",
			   "22:00",
			   "46.05592740593597, 14.504080196029753",
			   "K4",
			   6,
			   17)

event5 = Event(4,
			   "Baking Party",
			   "Join us for a delicious Baking Party extravaganza! If you're into cinema, hanging by the river, cookies, disco, horse riding, trampolines or the zoo, this event is perfect for you. Matic, Vilma, Majda, and Bojan are excited to whip up a storm of scrumptious treats to tease your taste buds. Don't worry - there won't be any balls or horses involved, just plenty of fun and laughing as you create your masterpieces. So come along, tap into your inner baker, and let's create some dough-lightful memories together! Don't miss out, book your spot now! 🎂🍪🎉",
			   "Saturday",
			   "16:00",
			   "46.067100, 14.491936",
			   "Celovška cesta 99 Ljubljana",
			   6,
			   1)

people = {person1.id: person1, person2.id: person2, person3.id: person3, person4.id: person4}
events = {event1.id: event1, event2.id: event2, event3.id: event3, event4.id: event4, event5.id: event5}


# if __name__ == '__main__':
# 	event = event1
# 	people_des = ""
# 	for person in people.values():
# 		likes = ",".join(person.preferences)
# 		hates = ",".join(person.hates)
# 		people_des += f"{person} that likes {likes} but hates {hates}.\n"
# 	ans = askgpt(f"please write short fun description of next event: {event.title} and reasons why next people will like it and should attend: {people_des}. Please keep it short. Emojis are welcome.")
# 	print(ans)