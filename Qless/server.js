const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

//import routes
const visitorsRoutes = require('./routes/visitors');
const hostsRoutes = require('./routes/hosts');
const appointmentsRoutes = require('./routes/appointments');

//app middleware
app.use(bodyParser.json());
app.use(cors());

//route middleware
app.use(visitorsRoutes);
app.use(hostsRoutes);
app.use(appointmentsRoutes)


const PORT = 8000;
const DB_URL = 'mongodb+srv://DasuniRJ:DRJ970403@vms.g11f9.mongodb.net/qless_vms?retryWrites=true&w=majority';

mongoose.connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log('DB connected');
})
.catch((err) => console.log('DB connection error', err));


app.listen(PORT, () => {
    console.log(`App is running on ${PORT}`);
});