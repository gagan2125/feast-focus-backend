const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://gagansk2125:eRcijdxojd8f7YVv@cluster0.ejolb.mongodb.net/feastFocus', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB Connected');
    } catch (error) {
        console.error('Database Connection Failed:', error);
        process.exit(1);
    }
}

module.exports = connectDB