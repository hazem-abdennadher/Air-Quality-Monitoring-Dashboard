import{BsFillDoorOpenFill,BsFillDoorClosedFill} from 'react-icons/bs'

const CardDoor = ({title,status}) => {
    return ( 
        <div className="card fan">
            <div className="settings">
                    {status ? <BsFillDoorOpenFill className="icon" /> : <BsFillDoorClosedFill className="icon" />}
                    <p>{title}: <span className={status?"ON":"OFF"}>{status?"UNLOCKED":"LOCKED"}</span></p>
            </div>
        </div>
     );
}
 
export default CardDoor;