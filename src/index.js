const express = require('express')
const mongooose = require('mongoose')
const authRoutes = require('./routes/authRoutes')

const app = express();
app.use(authRoutes);
const PORT = 3000
const mongoUri = 'mongodb+srv://hasib:hasib123@cluster0.yg8ug.mongodb.net/'
mongooose.connect(mongoUri);

mongooose.connection.on('connected', () => {
    console.log('connected to mongo instance')
})

mongooose.connection.on('error', (err) => {
    console.error('error connecting to mongo', err)
})

app.get('/', (req, res) => {
    res.send("Hi there")
})

app.listen(PORT, () => {
    console.log(`server is running at http//localhost:${PORT}`)
})