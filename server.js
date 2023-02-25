//Setup
const { db } = require('./db'); //Import in database
const express = require('express'); //Importing in 'express' function
const app = express(); //Capture value of expree and assign to 'app'
const port = 3000; //Assign port to 3000


const { usersRouter, showsRouter } = require('./routes'); // Import 'users' and 'shows' from routes

//Middleware
app.use(express.json());

app.use('/users', usersRouter);
app.use('/shows', showsRouter);

//RunApp
app.listen(port, async () => {
    await db.sync();
    console.log("Your server is listening on port " + port);
});