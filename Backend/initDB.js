require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const app = express();

const Holdings = require("./models/HoldingsModel");
const Positions = require("./models/PositionsModel");
const dbUrl = process.env.MONGO_URL;
const port = process.env.PORT || 3000;

// IMPORTANT: import only holdings
const { holdings } = require("../dashboard/src/data/data");
const { positions } = require("../dashboard/src/data/data");

async function main() {
  try {
    await mongoose.connect(dbUrl);
    console.log("Database connection successful");

    await initDb();
    mongoose.connection.close();
  } catch (err) {
    console.error("Database connection failed:", err);
  }
}

const initDb = async () => {
  await Holdings.deleteMany({});
  await Holdings.insertMany(holdings);
  console.log("Holdings data initialized successfully");
  await Positions.deleteMany({});
  await Positions.insertMany(positions);
  console.log("Positions data initialized successfully");
};

main();
