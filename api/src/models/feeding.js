import mongoose from 'mongoose';

const { Schema } = mongoose;

const feedingSchema = new Schema({

    _id: String,
    time: Date,
    location: String,
    food: String,
    quantity: String,
}
)

const Feeding = mongoose.models['Feeding']
    ? mongoose.models['Feeding']
    : mongoose.model('Feeding', feedingSchema);

export { Feeding };