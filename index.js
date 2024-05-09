const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/productmodel.js');
const productRoute = require('./routes/product.route.js');
const app = express()

//middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//routes
app.use("/api/products", productRoute);


app.listen(3000, () => {
    console.log("server running");
});

app.get('/',(req,res) =>{
    res.send("Hello from node api server");
}
);

mongoose.connect("mongodb+srv://jabz:omarjabz1@backenddb.zxrjfx5.mongodb.net/Node-API?retryWrites=true&w=majority")
  .then(() => {
    console.log('Connected!');
});