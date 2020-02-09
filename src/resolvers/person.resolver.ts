import Person from './person.schema';
import Movie from './movie.schema';

const resolvers = {
    Query: {
        person(root: any, { keyword }: any, { db }: any) {
            return db.collection('Person').findOne({ firstName: keyword });
        }
    },
    Mutaion: {
        async addPerson(root: any, { input }: any, { db }: any) {
            const person = new Person({
                firstName: input.firstName,
                lastName: input.lastName,
                inMovie: input.inMovie
            });

            await db.collection('Person').insert(person);

            return person;
        }
    }
}