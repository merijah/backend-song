const app = require('./app');
const mongoose = require('mongoose');

const PASSWORD = process.env.PASSWORD;

if(!PASSWORD) {
    console.log('Environment variable PASSWORD must be defined');
    process.exit();
}
// const DB = process.env.DATABASE_URL;
const DB = process.env.MONGODB_ATLAS_DATABASE_URL?.replace('<PASSWORD>', process.env.PASSWORD!);

mongoose.connect(DB).then((con: any) => {
    console.log('db connection successful!')
}).catch((error: Error) => console.log(error));

const PORT = process.env.PORT;

const server = app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`);
});

process.on('unhandledRejection', err => {
    server.close(() => process.exit(1));
});

process.on('uncaughtException', err => {
    server.close(() => process.exit(1));
});

module.exports = mongoose;