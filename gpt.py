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
			timeout=40
		)

		if response.ok:
			#print(response.json()["choices"][0]["message"]["content"])
			return (1, (response.json()["choices"][0]["message"]["content"]).replace("\n", "\\n"))
	except:
		pass
	return (0, "Network error")

def gpt_create_invitation(party_type, date):
	prompt = "Write {} a 40 to 60 word invitation for a {} party on {}. Don't write [Your name].".format("[Insert name]", party_type, date)
	
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
	#event 4, four persons //TODO tole je malo precec, vec kot bi moglo bit on bo enkrat treba poltem tud v frntendu popravit
    return """{
    "tasks": {
        "1": ["Make the dough", "Preheat the oven"],
        "2": ["Chop fruits for toppings", "Melt chocolate"],
        "3": ["Whip cream", "Prepare icing"],
        "4": ["Decorate the baked goods", "Assist in clean up"]
    },
    "supplies": {
        "1": ["Flour", "Yeast", "Sugar", "Measuring cups"],
        "2": ["Fruits", "Chocolate bar", "Cutting board"],
        "3": ["Heavy cream", "Icing sugar", "Whisk"],
        "4": ["Sprinkles", "Edible decorations", "Disposable plates"]
    }
}"""

def gpt_cached_invitation():
	#Vilma, Baking Party, 23.8.2023
	return """Hey [Insert name],

I'm throwing a Hanging by the River party this Friday and would love for you to join! Come unwind and have a fantastic time with friends while we soak in the soothing riverside ambiance. Save the date, and let's create some wonderful memories together by the river!

Looking forward to seeing you,
[Your Name]""".replace("\n", "\\n")

if __name__ == "__main__":
	print("OK")

	#status, result = gpt_create_arrangement(4, "Baking party")
	#print(result)

	print(gpt_cached_invitation())

	#not prod = True
	#status, result = gpt_create_invitation("Vilma", "Baking Party", "23.8.2023")
	#print(result)

	#not prod = True
	#status, result = gpt_create_arrangement(7, "skydiving")
	#print(result)
