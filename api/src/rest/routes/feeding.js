import express from 'express';
import { Feeding } from '../../models/feeding';

const feedingRoute = express.Router();

feedingRoute.post('/feedings/', async (request, response) => {
    const feeding = new Feeding(request.body);
    try {
        await feeding.save();
        response.status(201).send({ _id: feeding._id })
        console.log(`New feeding registered: ${feeding._id}`)
    } catch (error) {
        console.log(`Error creating new feeding: ${error}`)
        response.status(400).send(`Error: failed to register feeding - ${error}`)
    }
})

feedingRoute.get('/feedings/', async (request, response) => {
    try {
        const feedings = await Feeding.find({});
        response.send(feedings);
    } catch (error) {
        console.log(`Error: failed to fetch feedings - ${error}`)
        response.status(400).send(`Error: failed to fetch feedings - ${error}`);
    }
})