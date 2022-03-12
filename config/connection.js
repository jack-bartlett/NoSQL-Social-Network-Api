const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/NoSQL-Social-Network-Api', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

module.exports = mongoose.connection;