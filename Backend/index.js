require("dotenv").config();

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Holdings = require("./models/HoldingsModel");
const Positions = require("./models/PositionsModel");
const Orders = require("./models/OrdersModel");
const cors = require("cors");
const bodyParser = require("body-parser");

const port = process.env.PORT || 3000;
const Mongouri = process.env.MONGO_URL;

// ✅ MIDDLEWARE FIRST
app.use(cors({
  origin: "*"
}));
app.use(bodyParser.json());

// ✅ ROUTES AFTER MIDDLEWARE
app.get("/allHoldings", async (req, res) => {
  let allHoldings = await Holdings.find({});
  res.json(allHoldings);
});

app.get("/allPositions", async (req, res) => {
  let allPositions = await Positions.find({});
  res.json(allPositions);
});

app.get("/", (req, res) => {
  res.send("Backend is working");
});


app.post("/newOrder", async(req,res)=>{
 let newOrder =  new Orders({
      name : req.body.name,
    qty : req.body.qty,
    price : req.body.price,
    mode : req.body.mode
 });

 newOrder.save();
 res.send("Order Saved");
})
// ✅ START SERVER
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  mongoose.connect(Mongouri);
  console.log("Database connected");
});
