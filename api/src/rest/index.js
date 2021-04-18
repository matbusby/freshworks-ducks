import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { feedingRoute } from './routes/feeding.js';

const routes = express();

routes.use(cors());
routes.use(bodyParser.urlencoded({ extended: false }));
routes.use(bodyParser.json());
routes.use(feedingRoute);

routes.get('/', (req, res) => {
    res.sendStatus(200);
});

export default routes;