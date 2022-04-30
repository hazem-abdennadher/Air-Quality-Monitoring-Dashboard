import {SiElasticcloud} from 'react-icons/si'
import {FaGasPump} from 'react-icons/fa';
import {WiHumidity} from 'react-icons/wi';
import {FaTemperatureHigh} from 'react-icons/fa'

const Card = ({title,data,status,type}) => {
    return ( 
        <div className={`card ${type}`}>
            <div className="card-header">
                <div className='card-info'>
                    {type === "gas" && <FaGasPump className='icon' />}
                    {type === "co2" && <SiElasticcloud className='icon' />}
                    {type === "humidity" && <WiHumidity className='icon' />}
                    {type === "temperature" && <FaTemperatureHigh className='icon' />}
                    <p>{title}</p>
                </div>
                <div className='card-data'>
                    <p>{data}</p>
                </div>
            </div>
            <div className="card-content">
            <h4  className={ status === "normal"? "success" : status === "low" ? "warning" : "danger" }>{status}</h4>
                {status === "normal" && <p>Everything is fine</p>}
                {status === "low" && <p>Warning Low Readings</p>}
                {status === "high" && <p>Danger!!!</p>}
            </div>
        </div>
     );
}
 
export default Card;