from gpt import gpt_rate_personal_liking
from travel import *
from database import people, events
from config import prod

def calculate_carbon_footprint(users):
	event_carbon_footprints = {}

	for event in events.values():
		for person in users:
			dist = calculate_dist(person, event)
			footprint = calculate_car_carbon_footprint(dist)
			event_carbon_footprints[event.id] = footprint
	return event_carbon_footprints


def calculate_rank(users):
	event_carbon_footprints = calculate_carbon_footprint(users)
	rank = sorted(event_carbon_footprints.items(), key=lambda kv: kv[1])

	together = 0
	for event_id, value in rank:
		events[event_id].score = 10 - np.log(value + 1)
		together += value
	for event in events.values():
		if prod:
			answer = gpt_rate_personal_liking(event, users)
			sc = [2 for _ in users]
			if answer[0] == 1:
				score = answer[1]
				try:
					sc = list(map(lambda x: int(x), score.split()))
				except Exception:
					sc = [5 for _ in users]
		else:
			# get a list of random integers between 1 and 10
			# sc = np.random.randint(1, 10, len(users))  # random liking score
			sc = [2 for _ in users]
		event.score += 10 - event.co2
		event.score += sum(sc)
		# event.score = event.score / together * 10

	return events


class Room:
	id = 0
	users = []

	def __init__(self, id, persons):
		self.id = id
		self.users = persons

	def __str__(self):
		#return ("R{}: {}".format(self.id, str(self.users)))
		return str(self.users)
	def __repr__(self):
		return self.__str__()
