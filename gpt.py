import requests
from config import prod

def askgpt(prompt = "Write Haiku about Dragonhack"):
	#model = "gpt-3.5-turbo"
	model = "gpt-4"
	token = "Lq3QUQAeSofDqHQ8HJg6nVGcUNmB1l"

	try:

		response = requests.post(
			"https://openai-api.meetings.bio/api/openai/chat/completions",
			headers={"Authorization": f"Bearer {token}"},
			json={
				 # specification of all options: https://platform.openai.com/docs/api-reference/chat/create
				 "model": model,
				 "messages": [{"role": "user", "content": prompt}],
			},
			timeout=30
		)

		if response.ok:
			#print(response.json()["choices"][0]["message"]["content"])
			return (1, (response.json()["choices"][0]["message"]["content"]))
	except:
		pass
	return (0, "Network error")

def gpt_create_invitation(name, party_type, date):
	prompt = "Write {} a 40 to 60 word invitation for a {} party on {}. Don't write [Your name].".format(name, party_type, date)
	
	if(not prod):
		return (1, gpt_cached_invitation())
	return askgpt(prompt)

def gpt_create_arrangement(num_people, party_type):
	prompt = ("We are organising a {} party. There will be n = {} guests. Arrange tasks and party supplies between guests."
		+"Output must be in the following format: {{ \"tasks\":{{ \"1\": [ tasks for guest 1 ] , ... , \"n\": [ tasks for guest n ] }}, "
		+ "\"supplies\":{{ \"1\": [ supplies guest 1 should bring ] , ... , \"n\": [ supplies guest n should bring ] }} }}"
		).format(party_type,num_people)

	if(not prod):
		return (1, gpt_cached_arrangement())
	
	return askgpt(prompt)


def gpt_rate_peronal_liking_foreach(person, event):
	likings = ", ".join(person.preferences)
	hated = ", ".join(person.hates)

	event_desc = event.name + ": " + event.description
	prompt = (f"Here is a person that likes {likings}, but hates {hated}." +
		f"how much on a scale from 1 to 10 is he expected to enjoy next activities: {event_desc}. Return only the number.")

	if(not prod):
		return (1, gpt_cached_rates())

	return askgpt(prompt)


def gpt_rate_personal_liking(event, people):
	people_list = ""
	for person in people:
		people_list += person.name + "likes: " + ", ".join(person.preferences) + ". They hate " + ", ".join(person.hates)

	event_descs = event.title + ": " + event.description
	prompt = (f"Here is an event {event_descs} and a list of people and their likes and dislikes: {people_list}. How much on a scale from 1 to 10 is each person expected to enjoy the event? Return only the numbers.")

	if(not prod):
		return (1, gpt_cached_pesonal_likings())

	return askgpt(prompt)


def get_event_description(event, people):
	people_des = ""
	for person in people:
		likes = ",".join(person.preferences)
		hates = ",".join(person.hates)
		people_des += f"{person} that likes {likes} but hates {hates}.\n"
	ans = askgpt(
		f"please write short fun description of next event: {event.title} and reasons why next people will like it and should attend: {people_des}. Please keep it short.")

	if(not prod):
		return (1,gpt_cached_event_descriptions())
	
	return ans

#cached responses
def gpt_cached_event_descriptions():
	return ""
def gpt_cached_pesonal_likings():
	return ""
def gpt_cached_rates():
	return ""
def gpt_cached_arrangement():
	#event 4, four persons
    return """{ "users": [{"id": 1, "name": "Vilma", "image": "person5.jpg", "email": "vilma1999@gmail.com", "phone": "031 654 321", "timetable": ["friday", "saturday", "sunday"], "location": "46.050547, 14.466705", "preferences": ["cookies", "disco", "zoo"], "hates": ["horses"]}, {"id": 0, "name": "Matic", "image": "person1.jpg", "email": "matic.hocevar@gmail.com", "phone": "031 123 456", "timetable": ["monday", "tuesday", "friday"], "location": "46.067100, 14.491936", "preferences": ["cinema", "hanging by the river"], "hates": ["balls"]}, {"id": 2, "name": "Majda", "image": "person3.jpg", "email": "majdi-unicorn37@gmail.com", "phone": "031 123 456", "timetable": ["monday", "tuesday", "friday", "satuday", "sunday"], "location": "46.036786, 14.488854", "preferences": ["horse riding", "hanging by the river", "cinema", "trampolines"], "hates": ["disco", "heights"]}, {"id": 3, "name": "Bojan", "image": "person6.jpg", "email": "bojan.razkrosi@hotmail.com", "phone": "031 123 456", "timetable": ["monday", "tuesday", "wednesday", "satuday", "sunday"], "location": "46.138015, 14.558444", "preferences": ["horse riding", "cookies", "trampolines"], "hates": ["water"]}], "arrangements": {
    "tasks": {
    "1": ["Prepare cookie dough", "Bake cookies"],
    "2": ["Prepare cupcake batter", "Bake cupcakes"],
    "3": ["Prepare brownie mix", "Bake brownies"],
    "4": ["Prepare frosting", "Decorate baked goods"]
    },
    "supplies": {
    "1": ["Cookie mix", "Baking sheet", "Mixing bowl"],
    "2": ["Cupcake mix", "Cupcake liners", "Muffin tin"],
    "3": ["Brownie mix", "Square baking pan", "Mixing bowl"],
    "4": ["Frosting", "Sprinkles", "Piping bags and tips"]
    }
    }, "event": {"id": 4, "title": "Baking Party", "description": "Join us for a delicious Baking Party extravaganza! If you're into cinema, hanging by the river, cookies, disco, horse riding, trampolines or the zoo, this event is perfect for you. Matic, Vilma, Majda, and Bojan are excited to whip up a storm of scrumptious treats to tease your taste buds. Don't worry - there won't be any balls or horses involved, just plenty of fun and laughing as you create your masterpieces. So come along, tap into your inner baker, and let's create some dough-lightful memories together! Don't miss out, book your spot now! 🎂🍪🎉", "date": "Saturday", "time": "16:00", "location": "46.067100, 14.491936", "score": 21.92579613682883, "co2": 1} }"""

def gpt_cached_invitation():
	#Vilma, Baking Party, 23.8.2023
	return """Hey Vilma! You're invited to a fabulous Baking Party on August 23rd, 2023! Get ready to flaunt your culinary skills and indulge in mouth-watering treats. Bring your favorite recipe and join us for a day of mixing, baking, and tasting. Don't miss out on the delicious fun!"""


# if __name__ == "__main__":
	#status, result = gpt_create_arrangement(7, "skydiving")
	#print(result)

	#not prod = True
	#status, result = gpt_create_invitation("Vilma", "Baking Party", "23.8.2023")
	#print(result)

	#not prod = True
	#status, result = gpt_create_arrangement(7, "skydiving")
	#print(result)
