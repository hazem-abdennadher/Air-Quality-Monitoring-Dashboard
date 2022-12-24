import {FaFan} from 'react-icons/fa'
const CardVentilation = ({title,status}) => {
    return ( 
        <div className="card fan">
            <div className="settings" >
                    <FaFan className={`icon ${status?"fan-animation":""}`} />
                    <p>{title}: <span className={status?"ON":"OFF"}>{status?"ON":"OFF"}</span></p>
            </div>
        </div>
     );
}
 
export default CardVentilation;