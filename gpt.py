import requests

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
	#prompt = "Write {} a 40 to 60 word invitation for a {} party on {}. Don't write [Your name].".format(name, party_type, date)
	prompt = ("Napiši vabilo dolžine do 60 besed. {} je vabljenec." +
		"Zabava ima tematiko {} in bo potekala na dan {}.").format(name, party_type, date)
	return askgpt(prompt)

def gpt_create_arrangement(num_people, party_type):
	prompt = ("We are organising a {} party. There will be {} guests. Make arrangement table of guests for tasks" + 
		"and party supplies. Table should be in the following format: | Guest # | Supplies | Tasks |. Try to fix table alignment with adding spaces.").format(party_type, num_people)
	return askgpt(prompt)

if __name__ == "__main__":
	#print( gpt_create_invitation("Martin", "skydiving", "23.3.2024") )
	status, result = gpt_create_arrangement(7, "skydiving") 
	print(result)
	#print(askgpt("Kako se reče stvarem potrebnim za zabavo v angleščini?"))

