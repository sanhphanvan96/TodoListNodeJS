import mongoose from 'mongoose';
const mongoURI = 'mongodb://localhost:27017/todos';
const options = {
    useMongoClient: true
};

mongoose.connect(mongoURI, options);

const conn = mongoose.connection;

conn.on('error', console.error.bind(console, 'connection error:'));

conn.once('open', function () {
    console.log('Database connected successfully');
});

export {conn};
export default mongoose;