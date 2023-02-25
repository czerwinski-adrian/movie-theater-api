//Connections
const { User } = require("../models");
const { Router } = require("express");
const usersRouter = Router();

//Get all users
usersRouter.get('/users', async (req, res) => {
    try {
        const allUsers = await User.findAll();
        res.status(200).send(allUsers);
    } catch (error) {
        res.status(500).send({ err: error.message });
    }
});

//Get single user
usersRouter.get('/users/:id', async (req, res) => {
    try {
        const user = await User.findByPk(req.params.id);
        if (!User){
            res.status(404).send({ err: 'User not found' });
        }else{
            res.status(200).send(user);
        }
    } catch (error) {
        res.status(500).send({ err: error.message });
    }
});

//Export
module.exports = usersRouter