import requests

def askgpt(prompt = "Write Haiku about Dragonhack"):
	model = "gpt-3.5-turbo"
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
			timeout=12
		)
		
		if response.ok:
			#print(response.json()["choices"][0]["message"]["content"])
			return (1, (response.json()["choices"][0]["message"]["content"]))
	except:
		pass
	return (0, "Network error")

def gpt_create_invitation(name, party_type, date):
	prompt = "Write {} a 40 to 60 word invitation for a {} party on {}. Don't write [Your name].".format(name, party_type, date)
	return askgpt(prompt)

if __name__ == "__main__":
	print( gpt_create_invitation("Matic", "bowling", "23.3.2024") )
