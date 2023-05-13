from travel import *
from database import people, events

def calculate_carbon_footprint(users):
	event_carbon_footprints = {}

	for event in events.values():
		for person in users.values():
			dist = calculate_dist(person, event)
			footprint = calculate_car_carbon_footprint(dist)
			event_carbon_footprints[event.id] = footprint
	return event_carbon_footprints


def calculate_rank(users):
	event_carbon_footprints = calculate_carbon_footprint(users)
	rank = sorted(event_carbon_footprints.items(), key=lambda kv: kv[1])

	together = 0
	for event_id, value in rank:
		events[event_id].score = value
		together += value
	for event in events.values():
		event.score = event.score / together * 10
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
