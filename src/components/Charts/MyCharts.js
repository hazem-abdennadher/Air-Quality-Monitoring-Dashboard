import "./charts.css"
import { useEffect, useState } from "react";
import HumidityChart from "./HumidityCart";
import TemperatureChart from "./TemperatureChart";
import CO2Chart from "./CO2Chart";
import GasChart from "./GasChart";
import CardList from "./Cards/CardList";
import {motion} from "framer-motion"
import Loading from "../Loading/Loading";
const MyCharts = () => {

    const [data, setData] = useState([]);
    const API_URL = process.env.REACT_APP_MY_API_URL;
   
    const sendData = ()=>{
        const STATES = ["low","normal","high"];
        fetch(`${API_URL}/AQ`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "temperature": Math.floor(Math.random()*100)-40,
                "humidity": Math.floor(Math.random()*100),
                "gas": Math.floor(Math.random()*100),
                "co2": Math.floor(Math.random()*100),
                "state":{
                    "general": STATES[Math.floor(Math.random()*3)] ,
                    "temperature": STATES[Math.floor(Math.random()*3)],
                    "humidity": STATES[Math.floor(Math.random()*3)],
                    "gas": STATES[Math.floor(Math.random()*3)],
                    "co2": STATES[Math.floor(Math.random()*3)],
                    "ventilation": Math.random() < 0.9,
                    "lock": Math.random() < 0.2
                }
            })
        })
    }
    const getData = async () => {
        const fectedData = await fetch(`${API_URL}/AQ/latest`);
        const dataJson = await fectedData.json();
        let newData ;
        newData=data;
        newData.push(dataJson[0]);
        if(newData.length>20){
            newData.splice(0,1);
        }
        setData([...newData]);      
    }



    useEffect(()=>{
        getData();
        setInterval((getData),3000);
        setInterval((sendData),2800);
    },[])

    if(data.length===0){
        return <Loading/>
    }
    return ( 
        <motion.div
        initial={{ x: "+100vw" }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5 }}
        exit={{ x: "-100vw" }}
        >
            <CardList data={data.slice(-1)[0]}/>
            <div className="four-charts"> 
                <TemperatureChart data={data} />
                <HumidityChart data={data} />        
                <CO2Chart data={data} />
                <GasChart data={data} />  
            </div>
        </motion.div>
     );
}
 
export default MyCharts;