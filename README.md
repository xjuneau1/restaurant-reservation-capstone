<h2>Restaurant Reservation System - Thinkful Capstone Project</h2>

___

<p>This project was presented as a barebones application without functionality. I was provided 8 different user stories which detailed features to implement into the application. My task was to use the technologies I learned in my time at Thinkful to build: A database and API to serve and store data, as well as the user interface with which restaurant employees can keep track of reservations, status, and seating tables in a restaurant.</p>

_Example / Final Project:_ <a href="https://restaurant-reservation-client-1cpy27n0r-xjuneau1.vercel.app/">https://restaurant-reservation-client-1cpy27n0r-xjuneau1.vercel.app/</a>

___

In order to get this project up and running on your machine please following these steps:

- Download and extract, or clone this repository via  your CLI.

- Open the folder containing the "front-end" and "back-end" folders (i.e the main folder) in your CLI and run the following command 
```javascript 
npm install
```
- Then go into the ```./back-end/.env ``` file and change the value of the DATABASE_URL variable to the URL of your PostgreSQL database.

- Once your database is set up with the API, you can run the following command to create the tables in your database and seed them with data -
```javascript 
npx knex migrate:latest && npx knex seed:run
```
- Now the back-end is set up and the application is ready to start up, in order to do this make sure you are in the root directory which contains the ```./back-end``` folder and ```./front-end``` folder and run the following command -
```javascript 
npm run start
```

This will start the development server for the backend and the client for the frontend.
___
<br>
<h3>Coding Language and Libraries Used:</h3>


| Stack | Technologies                                                     |
| ---------------- | ---------------------------------------------------------------- |
| back-end     | Express, Node, Knex.js, CORS, PostgreSQL, DBeaver  |
| front-end   | HTML, React.js, Javascript, Node, CSS, Bootstrap,  |

<br>

___
