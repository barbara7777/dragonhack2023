class Event:
    id = 0
    title = ""
    description = ""
    date = ""
    time = ""
    location = ""
    score = 0
    co2 = 0  # in kg

    def __init__(self, id, title, description, date, time, location, score, co2):
        self.id = id
        self.title = title
        self.description = description
        self.date = date
        self.time = time
        self.location = location
        self.score = score
        self.co2 = co2

    def __str__(self):
        return self.id + self.title + " " + self.description + " " + self.date + " " + self.time + " " + self.location


class Person:
    id = 0
    name = ""
    email = ""
    phone = ""
    timetable = []
    location = ""
    preferences = []
    hates = []

    def __init__(self, id, name, email, phone, timetable, location, preferences, hates):
        self.id = id
        self.name = name
        self.email = email
        self.phone = phone
        self.timetable = timetable
        self.location = location
        self.preferences = preferences
        self.hates = hates

    def __str__(self):
        return self.name + " " + self.email + " " + self.phone


if __name__ == '__main__':
    person1 = Person(0,
                     "Matic",
                     "matic.hocevar@gmail.com",
                     "031 123 456",
                     ["monday", "tuesday", "friday"],
                     "Ljubljana",
                     ["cinema", "hanging by the river"],
                     ["balls"])

    person2 = Person(1,
                     "Vilma",
                     "vilma1999@gmail.com",
                     "031 654 321",
                     ["friday", "saturday", "sunday"],
                     "Ljubljana",
                     ["cookies", "disco", "zoo"],
                     ["horses"])

    person3 = Person(2,
                     "Majda",
                     "majdi-unicorn37@gmail.com",
                     "031 123 456",
                     ["monday", "tuesday", "friday", "satuday", "sunday"],
                     "Domžale",
                     ["horse riding", "hanging by the river", "cinema", "trampolines"],
                     ["disco", "heights"])

    person4 = Person(3,
                     "Bojan",
                     "bojan.razkrosi@hotmail.com",
                     "031 123 456",
                     ["monday", "tuesday", "wednesday", "satuday", "sunday"],
                     "Kranj",
                     ["horse riding", "cookies", "trampolines"],
                     ["water"])

    event1 = Event(0,
                   "Horse riding",
                   "Horse riding in the forest",
                   "monday",
                   "12:00",
                   "Ljubljana",
                   5,
                   6)


