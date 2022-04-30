require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
//---------------------------------------------------
mongoose.connect(process.env.DATABASE_URL);
const DB = mongoose.connection;
DB.on("error", (err) => console.error(err));
DB.once("open", () => console.log("connected to database"));
//---------------------------------------------------

app.use(express.json());
app.use(cors({ origin: "*" }));
const AirQuality = require("./routes/AirQuality");
app.use("/AQ", AirQuality);




app.use(express.json());
app.listen(process.env.PORT || 8000 , () => console.log("server running"));
