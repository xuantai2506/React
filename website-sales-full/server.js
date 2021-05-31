const express = require("express");
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
const shortid = require("shortid");

const app = express();
app.use(bodyParser.json());

mongoose.connect("mongodb://localhost/website-sales-full", {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})

const Product = mongoose.model("products", new mongoose.Schema({
    _id: {
        type: String,
        default: shortid.generate
    },
    title: String,
    description: String,
    image: String,
    price: Number,
    availableSizes: [String],
}))

app.get("/api/products", async (req, res) => {
    const products = await Product.find({});
    res.send(products);
})

app.post("/api/products", async (req, res) => {
    const newProduct = new Product(req.body);
    const savedProduct = await newProduct.save();
    res.send(savedProduct)
})

app.delete("/api/products/:id", async (req, res) => {
    const deleteProduct = await Product.findByIdAndDelete(req.params.id);
    res.send(deleteProduct);
})

const port = process.env.PORT || 5000;
app.listen(port, () => console.log("sever localhost:5000"))