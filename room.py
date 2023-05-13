from travel import *
from database import people, events


class Room:
	id = 0
	users = []
	event_carbon_footprints = {}

	def __init__(self, id, persons):
		self.id = id
		self.users = persons

	def calculate_carbon_footprint(self):
		for event in events:
			loc = event.location
			loc_vec = list(map(lambda x: float(x), loc.split(",")))

			for person in self.users:
				person_loc = person.location
				person_loc_vec = list(map(lambda x: float(x), person_loc.split(",")))
				dist = calculate_dist(person_loc_vec, loc_vec)
				footprint = calculate_car_carbon_footprint(dist)
				self.event_carbon_footprints[event.id] = footprint

