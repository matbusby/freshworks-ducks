import mongoose from 'mongoose';
import routes from './rest/index.js';

const DB_CONNECTION = 'mongodb://mongo:27017/ducks';

mongoose.connect(
    DB_CONNECTION || '',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        connectTimeoutMS: 2000,
    },
    (error) => {
        if (error) console.log(error);
        else
            console.log(
                `Connected to database successfully: ${DB_CONNECTION}} `,
            );
    },
);

routes.listen(2000, () => {
    console.log(
        `Successfully booted server. Listening on port: 2000`,
    );
});