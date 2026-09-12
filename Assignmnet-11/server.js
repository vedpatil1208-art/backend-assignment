const express = require('express');
const mongoose = require('mongoose');
const teacherRouter = require('./router/teacherRouter');
const studentRouter = require('./router/studentRouter');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

const mongoURI = 'mongodb://127.0.0.1:27017/collegeDB';

mongoose.connect(mongoURI)
    .then(() => {
        console.log('MongoDB connected successfully');
    })
    .catch((error) => {
        console.error('MongoDB connection failed:', error.message);
    });

app.use('/teacher', teacherRouter);
app.use('/student', studentRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});