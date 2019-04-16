# Event Manager


## Run
For the frontend, run on the root folder:
```
npm start
```

For the simulated backend, I used json-server. To run it. install json-server globally
```
npm install -g json-server
```
and run on the root folder:
```
json-server --watch db.json
```

## Solution

This is an event manager thinked and developed for a single user.

It allows you to see events, create new ones and subcribe and unsubcribe to them.
The solution is fully responsive being able to be renderized in a mobile device.

### On Create Event
- All fields are mandatory, warning messages will be shown if a field was not populated
- Date must be a future date (tomorrow or later)
- No duplicated or character restrictions over the fields
- Name has a max length of 20
- Description has a max length of 60
- Location has a max length of 30

### On Subscribe / Unsubscribe
- Subscription its only a property over the event, tied to the current user, reflected on a checkbox
- It does not trigger anything nor allows multiple users

## TODO
- Fix uncontrolled/controlled error on console
- Fix libraries vulnerabilities
- Add unit tests
- Add duplicated restriction for Name and Date combination
