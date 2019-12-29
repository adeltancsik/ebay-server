# E-bay clone - Server

## What this project is about

An individual project made during my studies, practicing how to create a full-stack app from scratch.

This is an E-bay clone application's server side, where a registered user can access the site's features, which are:

- creating new advertisments with title, description, picture URL, and the advertiser's contact infos
- edit and delete existing advertisments

This project contains the endpoints and database models.

* **[Link to client side](https://github.com/adeltancsik/ebay-client)**


## Table of contents:

- **[How to install](#how-to-install)**
- **[Technologies](#technologies)**

## How to install

1. Clone the git repository
   `git clone git@github.com:adeltancsik/ebay-server.git`

2. cd into the folder ebay-server

3. Run npm install and before launching the app (I recommend it with nodemon), please make sure that your docker container is up and running.

4. Run nodemon index. The app runs in the development mode on http://localhost:4000 in the browser.

5. Checkout the **[Client ReadMe](https://github.com/adeltancsik/ebay-client)** to install and run the client.


## Technologies

- NodeJS
- Express
- Sequelize
- Body-parser
- Cors
- Bcrypt
- JSON Webtoken
- PostgreSQL
