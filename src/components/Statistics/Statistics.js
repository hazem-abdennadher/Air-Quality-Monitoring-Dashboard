import {motion} from  "framer-motion";
import { useEffect,useState } from "react";
import WeekStatsAvg from "./Stats/WeekStatsAvg";
import WeekStatsPercenatge from "./Stats/WeekStatsPercentage";
import "./stats.css";
import Loading from "../Loading/Loading";
const Statistics = () => {

    const [dataAVG, setDataAvg] = useState(null);
    const [dataPercenatge, setDataPercenatge] = useState(null);
    const API_URL = process.env.REACT_APP_MY_API_URL;

    const getStatsAvg = async () => {
        const fectedData = await fetch(`${API_URL}/AQ/week/`);
        const dataJson = await fectedData.json();
        setDataAvg(dataJson);
    }
    const getStatsPercentage = async () => {
        const fectedData = await fetch(`${API_URL}/AQ/week/percentage`);
        const dataJson = await fectedData.json();
        setDataPercenatge(dataJson);
    }
    useEffect(()=>{
        getStatsAvg();
        getStatsPercentage();
    },[])
    if(!dataAVG || !dataPercenatge){
        return <Loading/>
    }
    return ( 
        <motion.section style={{"--clr":"#008ffb"}}
        initial={{ x: "+100vw" }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5 }}
        exit={{ x: "-100vw" }}
        >
            <div className="title">
                <h1>Statistics</h1>
                <h1>Statistics</h1>
            </div>

            
            <div className="stats-container">
                    {dataAVG &&<WeekStatsAvg data={dataAVG} />}
                    {dataPercenatge && <WeekStatsPercenatge data={dataPercenatge} />}
            </div>
        </motion.section>
     );
}
 
export default Statistics;