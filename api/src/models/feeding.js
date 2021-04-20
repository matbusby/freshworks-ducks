import mongoose from 'mongoose';
import { pointSchema } from './common/point.js';
const { Schema } = mongoose;

const feedingSchema = new Schema({
    time: Date,
    location: {
        coords: pointSchema,
        street: String,
        city: String,
        province: String,
        country: String,
    },
    numberOfDucks: Number,
    food: String,
    quantity: Number,
}
)

const Feeding = mongoose.models['Feeding']
    ? mongoose.models['Feeding']
    : mongoose.model('Feeding', feedingSchema);

export { Feeding };