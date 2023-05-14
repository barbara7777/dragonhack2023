from config import prod
from database import people, events
from secret import CARBON_FOOTPRINT_API_KEY, CARBON_FOOTPRINT_API_HOST
import http.client
import numpy as np

def calculate_dist(person, event):
    loc1 = list(map(lambda  x: float(x), person.location.split(",")))
    loc2 = list(map(lambda  x: float(x), event.location.split(",")))

    # calculate distance between the coordinates loc1 and loc2
    dist = np.sqrt((loc1[0] - loc2[0]) ** 2 + (loc1[1] - loc2[1]) ** 2)
    return 1.7 * dist

def calculate_car_carbon_footprint(distance):
    litres = distance * 6.5 / 100
    if prod:
        conn = http.client.HTTPSConnection("carbonfootprint1.p.rapidapi.com")
        headers = {
            'X-RapidAPI-Key': CARBON_FOOTPRINT_API_KEY,
            'X-RapidAPI-Host': CARBON_FOOTPRINT_API_HOST
        }
        body = f"/FuelToCO2e?type=Petrol&litres={litres}"
        conn.request("GET", body, headers=headers)

        res = conn.getresponse()
        data = res.read()
        return eval(data.decode("utf-8"))["carbonEquivalent"]
    else:
        return  23.1 * litres


if __name__ == '__main__':
    person1 = people[0]
    event1 = events[0]
    print(calculate_dist(person1, event1))
    print(calculate_car_carbon_footprint(10))


