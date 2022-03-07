const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/NoSQL-Social-Network-Api', {
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true
});

module.exports = mongoose;