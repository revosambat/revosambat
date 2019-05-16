const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/sambat_db', {useNewUrlParser: true})
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    // we are connected!
});