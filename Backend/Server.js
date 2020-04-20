const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 3000;
const cors = require('cors');
const mongoose = require('mongoose');
const categoryRoutes = require('./Category.route');

mongoose
    .connect(
        "mongodb+srv://FashionCluster:fashionstore500@fashioncluster-a2dyx.gcp.mongodb.net/test?retryWrites=true&w=majority"
    )
    .then(() => {
        app.listen(PORT);
        console.log("Server Running" + PORT);
        console.log("Database Connected")
    })
    .catch(error => {
        console.log(error);
    });

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/category', categoryRoutes);