# freshworks-ducks

This application can be run either via docker or locally.

## NPM install

In a terminal, navigate to the api directory off of the main directory

Enter: **npm install**

This will install all needed node-modules to run application's backend

Navigate the the app directory off of the main directory

Enter: **npm install**

This will install all needed node-modules to run the application's frontend

## Environment variables

Make sure you have a copy of the .env file (this is not included on GitHub for security reasons)
Copy this file to the base of the app directory (./app/.env)
## Option 1 - Running in Docker

### In order to run via docker you will need to have docker set up and installed on your system

In a terminal, navigate to the base directory of the application

Enter: **docker-compose build**

This will build all necessary components for the application.  The first time you run this it may take some time to complete.

Once docker-compose build has completed: **Enter: docker-compose up**

This will load the application into your local docker desktop

Click on the 'Open in Browser" button in docker desktop next to the listing 'Web freshworks-ducks_web'
Alternatively you can enter: 'localhost:3000' in your browser.

## Option 2 - Running Locally

### UPDATE Database connection

Docker seems to need one specific connection string to work, while running locally requires another.  By default the application is set to the docker connection string.  

To run locally, navigate to ./api/src/app.js

Edit the const "DB_CONNECTION" to be: 'mongodb://**localhost**:27017/ducks'

### In order to run locally you will need to install MongoDB on your system
#### A community download of MongoDB is available [here](https://www.mongodb.com/try/download/community)

In a terminal navigate to the api directory off of the main directory.

Enter: **npm run start**

Open a second terminal and navigate to the app directory off of the main directory

Enter: **npm run build**

Once that has completed, enter: npm run start

Navigate to 'localhost:3000' in your browser and everything should be working.
