//Connections 
const { Show } = require("../models");
const { Router } = require("express");
const showsRouter = Router();

//Get all shows
usersRouter.get('/', async (req, res) => {
    try {
        const allShows = await Show.findAll();
        res.status(200).send(allShows);
    } catch (error) {
        res.status(500).send({ err: error.message });
    }
});

//Get single show
usersRouter.get('/:id', async (req, res) => {
    try {
        const user = await Show.findByPk(req.params.id);
        if (!Show){
            res.status(404).send({ err: 'Show not found' });
        }else{
            res.status(200).send(user);
        }
    } catch (error) {
        res.status(500).send({ err: error.message });
    }
});

//Export
module.exports = showsRouter