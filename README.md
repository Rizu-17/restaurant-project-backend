## Restaurant Project Backend for CSE-3200 Project

&nbsp;

### Requirements

- node version 16.14.2 or up
- MongoDB Atlas Cluster for DB

&nbsp;

### Set up & Run the Backend Codebase

Note: Please write all code for set up in your system terminal.

&nbsp;

> First we need to clone this repo and set up our environment.

&nbsp;

```
git clone https://github.com/Rizu-17/restaurant-project-backend.git
cd restaurant-project-backend
npm i
```

&nbsp;

> Now, we need to input our own MongoDB Atlas URL and password to the env file.

&nbsp;

First copy the config environment variables file template.

```
cp config_template config.env
```

Now, enter you Atlas database URL string and Password next to the DATABASE and DATABASE_PASSWORD variable (no spaces).

&nbsp;

> Our codebase is ready to rock!

```
npm start
```

&nbsp;

Now, run the frontend to view the website.
<br></br>
Front-end: [Restaurant Project Front-End Codebase](https://github.com/Rizu-17/restaurant-project)
