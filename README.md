# 🎉 MEETHUB 🎉

## Description

**MEETHUB** is a project made on DragonHack 2023.

With our app the burden of organising events such as anniversaries and meetups from start to finish is taken off 
of everyone's shoulders. Just by listing preferences and with the help of ChatGPT the process becomes simple, 
fast and environmentally conscious.

### Functionality

In essence, we've built a platform for organising events and meets in just a few simple steps.
From inviting friends that all state their preferences and possible dislikes, the application collects the data, does its magic and outputs the best recommendations based on the event participants and the CO2 footprint of such a meetup.
Each guest is assigned a task and gets a personalized invitation mail. Of course, we also show a "Do not forget to bring" list so that everything is ready and invitees can enjoy quality time without worries.

## Setup

For running the **backend**, you need to have python3 and pip installed.
First, install the dependencies:

```pip install -r requirements.txt```

To be able to use the APIs, you need to create a `secret.py` file in the project root directory. 
It must contain the following variables 
(If you want to utilise the APIs you need to insert your own credentials):

```python
CARBON_FOOTPRINT_API_KEY = ""
CARBON_FOOTPRINT_API_HOST = ""
SENDGRID_API_KEY = ""
SENDGRID_API_ENDPOINT = ""
```

Then, run the server:
```flask run```

Server should be available at `http://127.0.0.1:5000`.

### APIs used:

- [carbon footprint](https://rapidapi.com/carbonandmore-carbonandmore-default/api/carbonfootprint1/details) to estimate the carbon emissions of an event
- [sendgrid](https://sendgrid.com/) to send invitation emails
- GPT-4 via provided proxy to generate event descriptions, invitation mails and more (now the user needs their own credentials)

<hr>

For the **frontend** you need `npm` installed.

Run

```
npm install
npm start
```

and the frontend should be available at `http://localhost:3000/`.

## Further ideas

- [ ] Add option for users to rank preferred event
- [ ] Improve the registration process
- [ ] Adding events into users calendars
- [ ] Add calendar integration for users in order to find the best time for an event
- [ ] Add events scraping from other platforms
- [ ] Adding venues from Google Maps