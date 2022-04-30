const mongoose = require("mongoose");

const AirQualitySchema = new mongoose.Schema({
    temperature: {
        type: Number,
        required: true,
    },
    humidity: {
        type: Number,
        required: true,
    },
    gas: {
        type: Number,
        required: true,
    },
    co2: {
        type: Number,
        required: true,
    },
    state: {
        general: {
            type: String,
            required: true,
        },
        temperature: {
            type: String,
            required: true,
        },
        humidity: {
            type: String,
            required: true,
        },
        gas: {
            type: String,
            required: true,
        }, 
        co2: {
            type: String,
            required: true,
        },
        ventilation: {
            type: Boolean,
            required: true,
        },
        lock: {
            type: Boolean,
            required: true,
        }
    },
    Date: {
        type: Date,
        required: true,
        default: Date.now,
    },
});

module.exports = mongoose.model("AirQuality", AirQualitySchema);
