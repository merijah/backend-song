const app = require('./app');
const mongoose = require('mongoose');

const PASSWORD = process.env.PASSWORD;

if(!PASSWORD) {
    console.log('Environment variable PASSWORD must be defined');
    process.exit();
}
const DB = "mongodb://127.0.0.1:27017/songs";
// const DB = process.env.MONGODB_ATLAS_DATABASE_URL?.replace('<meri4525>', PASSWORD);

mongoose.connect(DB).then((con: any) => {
    console.log('db connection successful!')
}).catch((error: Error) => console.log(error));

const PORT = process.env.PORT;

const server = app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`);
});


const { MongoClient } = require('mongodb');

// Connection URI
const uri = 'mongodb://localhost:27017';

