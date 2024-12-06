const express = require('express');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoute');

const app = express();

app.use(express.json());

connectDB();

app.use('/api/user', userRoutes);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));