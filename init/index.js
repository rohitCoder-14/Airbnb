const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

main()
  .then(() => {
    console.log("Connected to db");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/destination");
}

const initDB = async () => {
  await Listing.deleteMany({});
  initData.data = initData.data.map((obj) => ({
    ...obj,
    owner: "67125f49809628e75ef2c955",
  }));
  await Listing.insertMany(initData.data);
  console.log("Data was Initlized");
};

initDB();
