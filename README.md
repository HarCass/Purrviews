# Purrviews-BE
An app to discover local cats.
## Live Version
https://purrviews-api.onrender.com/api
## Run Locally
### Cloning the Repo
To clone this repo you must have git installed on your system. Then navigate to the desired location you want the repo to be contained in and run the following command in your terminal
> git clone https://github.com/HarCass/nc-news-api

You may be prompted for your github details.

You can then make your may into the repo by running the following command in the terminal
> cd nc-news-api
### Installing dependencies
Once the repo is cloned and you have navigated inside of it, you can install the needed dependencies for the application. To do so you must have at least Node version 18.13.0 installed and run the following command in the terminal
>npm install
### Database setup
Now that dependencies are installed you can setup your databases. To do so you must have a MongoDB databse setup you can do this easily by signing up here https://www.mongodb.com/

Once Signed up create a cluster and Database by follwing this guide

>https://www.mongodb.com/basics/create-database

You should create 2 Databases called `test-data` and `dev-data`

These should then both have two collections called `posts` and `users`

Once this is done you must find your ATLAS_URI string which will be used for later

>https://www.mongodb.com/docs/guides/atlas/connection-string/#overview
### Environment Setup
To successfully connect to the databases locally you must first setup your environment variables.

To do so, please create a file in the root directory called `.env`

The content of the files should look something like this
- `ATLAS_URI="mongodb+srv://<mongodbanme>:<mongodbpassword>@cluster0.fxg2qxf.mongodb.net/test"`
- `PORT = 9090`
### Seeding the Database
Once you have setup the `.env` file you can run the following command in your terminal to seed your development database
>`npm run seed`

This will seed the development database, you can then view it via MongoDB or run
>`npm run dev`

this will start the application so you can interact with the database via the API (You can make requests to it with an application such as insomnia, the application runs on PORT 9090 by default).

If you wish to also seed the test database you can do so by running the following command in your terminal
>`npm test`

This will run some tests for the application to make sure it is working correctly and simultaneously seed the test databse.
### Making a Request to the API
Make a GET request to the endpoint `/api` to get a list of available endpoints.