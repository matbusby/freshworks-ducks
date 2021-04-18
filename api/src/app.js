import mongoose from 'mongoose';
import routes from './rest/index.js';

mongoose.connect(
    'mongodb://localhost:27017/ducks' || '',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        connectTimeoutMS: 2000,
    },
    (error) => {
        if (error) console.log(error);
        else
            console.log(
                `Connected to database successfully: mongodb://localhost:27017/app `,
            );
    },
);

routes.listen(2000, () => {
    console.log(
        `Successfully booted server. Listening on port: 2000`,
    );
});