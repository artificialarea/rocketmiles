# Rocketmiles - React Technical Assesment

_cloned from: https://github.com/rocketmiles/react-frontend-homework_ 

### Sacha Sedriks: assignment checklist
- [ ] Create Components from the root
- [ ] Filter API results set by hotel name input field search
- [ ] Sort the results set via dropdown by Price (in ascending and descending order), along with Recommended.
- [ ] Add additional unit tests for core functionality
- [ ] Handle all failed use cases, including...
  - [ ] Hotel name not found in list
  - [ ] No data is returned from REST endpoint
  - [ ] _Any others?_
- [ ] Restyle (optional, if time allows)


<br />

## Instructions: 
See also: instructions.pdf (v2)

## Development Frontend server

Run `npm start` for a dev server. Navigate to `http://localhost:1234`. The app will automatically reload if you change any of the source files.

## Running unit tests

Run `npm test` to execute the unit tests via [Jest](https://jestjs.io/) and [Enzyme](https://airbnb.io/enzyme/).

## Development Backend API server

We've packaged a very simple backend for you in docker to serve up the API for your development. You can find it in [backend-server](./backend-server).

Requires:
Java 11

#### To Run backend API using gradle
```bash
./gradlew clean bootRun
```

####  To Run backend API using Docker
- Install [docker](https://docs.docker.com/docker-for-mac/install/)
- `./boot`

#### Instructions: 
Checkout instructions.pdf