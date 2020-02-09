import mongoose from 'mongoose';
import Movie from './movie.schema';

const Schema from mongoose.Schema;

const PersonSchema = new Schema({
    id: String,
    firstName: String,
    lastName: String,
    inMovie:Movie
});

export default mongoose.model('person', PersonSchema);