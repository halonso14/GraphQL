import mongoose from 'mongoose';

const Schema from mongoose.Schema;

const MovieSchema = new Schema({
    id: String,
    firstName: String,
    lastName: String,
    acted:movie
});

export default mongoose.model('Movie', MovieSchema);