from travel import *
from database import people, events


class Room:
	id = 0
	users = []

	def __init__(self, id, persons):
		self.id = id
		self.users = persons

	def calculate_carbon_footprint(self):
		event_carbon_footprints = {}

		for event in events.values():
			for person in self.users.values():
				dist = calculate_dist(person, event)
				footprint = calculate_car_carbon_footprint(dist)
				event_carbon_footprints[event.id] = footprint
		return event_carbon_footprints

	def calculate_rank(self):
		event_carbon_footprints = self.calculate_carbon_footprint()
		rank = sorted(event_carbon_footprints.items(), key=lambda kv: kv[1])

		together = 0
		for event_id, value in rank:
			events[event_id].score = value
			together += value
		for event in events.values():
			event.score = event.score / together * 10
		return events

if __name__ == '__main__':
	room = Room(0, people)
	room.calculate_rank()