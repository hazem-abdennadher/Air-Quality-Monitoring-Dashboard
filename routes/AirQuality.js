const express = require("express");
const AirQuality = require("../models/AirQuality");
const router = express.Router();

//----------------------------------------------------------------------------------------------------------------------
//Getting all
router.get("/", async (req, res) => {
    try {
        const AirQualityDoc = await AirQuality.find();
        res.json(AirQualityDoc);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});
//Getting latest
router.get("/latest/", async (req, res) => {
    try {
        const AirQualityDoc = await (await AirQuality.find().sort({_id:-1}).limit(1));
        res.json(AirQualityDoc);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});
//Getting last week average temperature
router.get("/week/temperature", async (req, res) => {
    try {
        const AirQualityDoc = await AirQuality.aggregate([
            {
                $match: {
                    Date: {
                        $gte: new Date(Date.now() - (7 * 24 * 60 * 60 * 1000))
                    }
                }
            },
            {
                $group: {
                    _id: {
                        $dateToString: {
                            format: "%Y-%m-%d",
                            date: "$Date"
                        }
                    },
                    avgTemp: {
                        $avg: "$temperature"
                    }
                }
            }
        ]).sort({_id:-1});
        res.json(AirQualityDoc);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});
//Getting last week average humidity
router.get("/week/humidity", async (req, res) => {
    try {
        const AirQualityDoc = await AirQuality.aggregate([
            {
                $match: {
                    Date: {
                        $gte: new Date(Date.now() - (7 * 24 * 60 * 60 * 1000))
                    }
                }
            },
            {
                $group: {
                    _id: {
                        $dateToString: {
                            format: "%Y-%m-%d",
                            date: "$Date"
                        }
                    },
                    avgHum: {
                        $avg: "$humidity"
                    }
                }
            }
        ]).sort({_id:-1});
        res.json(AirQualityDoc);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});
//----------------------------------------------------------------------------------------------------------------------
//Getting last week average co2
router.get("/week/co2", async (req, res) => {
    try {
        const AirQualityDoc = await AirQuality.aggregate([
            {
                $match: {
                    Date: {
                        $gte: new Date(Date.now() - (7 * 24 * 60 * 60 * 1000))
                    }
                }
            },
            {
                $group: {
                    _id: {
                        $dateToString: {
                            format: "%Y-%m-%d",
                            date: "$Date"
                        }
                    },
                    avgCO2: {
                        $avg: "$co2"
                    }
                }
            }
        ]).sort({_id:-1});
        res.json(AirQualityDoc);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});
//-----------------------------------------------------
//Getting last week average gas
router.get("/week/gas", async (req, res) => {
    try {
        const AirQualityDoc = await AirQuality.aggregate([
            {
                $match: {
                    Date: {
                        $gte: new Date(Date.now() - (7 * 24 * 60 * 60 * 1000))
                    }
                }
            },
            {
                $group: {
                    _id: {
                        $dateToString: {
                            format: "%Y-%m-%d",
                            date: "$Date"
                        }
                    },
                    avgGas: {
                        $avg: "$gas"
                    }
                }
            }
        ]).sort({_id:-1});  
        res.json(AirQualityDoc);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});
//----------------------------------------------------------------------------------------------------------------------
//Getting temperature , humidity , co2 and gas las week average
router.get("/week/", async (req, res) => {
    try {
        const AirQualityDoc = await AirQuality.aggregate([
            {
                $match: {
                    Date: {
                        $gte: new Date(Date.now() - (7 * 24 * 60 * 60 * 1000))
                    }
                }
            },
            {
                $group: {
                    _id: {
                        $dateToString: {
                            format: "%Y-%m-%d",
                            date: "$Date"
                        }
                    },
                    avgTemp: {
                        $avg: "$temperature"
                    },
                    avgHum: {
                        $avg: "$humidity"
                    },
                    avgCO2: {
                        $avg: "$co2"
                    },
                    avgGas: {
                        $avg: "$gas"
                    }
                }
            }
        ]).sort({_id:-1});
        res.json(AirQualityDoc);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});
//----------------------------------------------------------------------------------------------------------------------
//percentage of normal state of air quality in the last 7 days
router.get("/week/percentage", async (req, res) => {
    try {
        const AirQualityDoc = await AirQuality.aggregate([
            {
                $match: {
                    Date: {
                        $gte: new Date(Date.now() - (7 * 24 * 60 * 60 * 1000))
                    }
                }
            },
            {
                $group: {
                    _id: {
                        $dateToString: {
                            format: "%Y-%m-%d",
                            date: "$Date"
                        }
                    },
                    Normal : {$sum : 
                        {
                            $cond: [
                                {
                                    $and: [
                                        { $eq: ["$state.general", "normal"]},
                                    ],}
                                , 1, 0]
                        }
                    },
                    Low : {$sum :
                        {
                            $cond: [
                                {
                                    $and: [
                                        { $eq: ["$state.general", "low"]},
                                    ],}
                                , 1, 0]
                        }
                    },
                    High : {$sum :
                        {
                            $cond: [
                                {
                                    $and: [
                                        { $eq: ["$state.general", "high"]},
                                    ],}
                                , 1, 0]
                        }
                    },
                    All : {$sum : 1},
                }
            }
        ]).sort({_id:-1});
        res.json(AirQualityDoc);

    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});




//Getting one
router.get("/:id", getAirQualityDoc, (req, res) => {
    res.send(res.airQualityDoc);
});

//-----------------------------------------------------
//creating one
router.post("/", async (req, res) => {
    const AirQualityDoc = new AirQuality({
        temperature: req.body.temperature,
        humidity: req.body.humidity,
        gas: req.body.gas,
        co2: req.body.co2,
        state: req.body.state,
        Date: req.body.Date
    });
    try {
        const newAirQualityDoc = await AirQualityDoc.save();
        res.status(201).json(newAirQualityDoc);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

//-----------------------------------------------------
//updating one
router.patch("/:id", getAirQualityDoc, async (req, res) => {
    if (req.body.temperature != null) {
        res.airQualityDoc.temperature = req.body.temperature;
    }
    if (req.body.humidity != null) {
        res.airQualityDoc.humidity = req.body.humidity;
    }
    if (req.body.gas != null) {
        res.airQualityDoc.gas = req.body.gas;
    }
    if (req.body.co2 != null) {
        res.airQualityDoc.co2 = req.body.co2;
    }
    if (req.body.state != null) {
        res.airQualityDoc.state = req.body.state;
    }
    try {
        const updatedAirQualityDoc = await res.airQualityDoc.save();
        res.json(updatedAirQualityDoc);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});
//-----------------------------------------------------
//deleting one
router.delete("/:id", getAirQualityDoc, async (req, res) => {
    try {
        await res.airQualityDoc.remove();
        res.json({ message: "document deleted" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});


//----------------------------------------------------------------------------------------------------------------------
async function getAirQualityDoc(req, res, next) {
    let airQualityDoc;
    try {
        airQualityDoc = await AirQuality.findById(req.params.id);
        if (airQualityDoc == null) {
            return res.status(404).json({ message: "Cannot find Document" });
        }
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
    res.airQualityDoc = airQualityDoc;
    next();
}

module.exports = router;
