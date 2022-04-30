import "./cards.css"
import CardVentilation from "./CardVentilation";
import CardDoor from "./CardDoor";
import Card from "./Card";
const CardList = ({data}) => {
    return ( 
        <div className="cards-list">
            <Card title={"temperature"} data={data.temperature} status={data.state.temperature} type={"temperature"}/>
            <Card title={"humidity"} data={data.humidity} status={data.state.humidity} type={"humidity"}/>
            <Card title={"co2"} data={data.co2} status={data.state.co2} type={"co2"}/>
            <Card title={"gas"} data={data.gas} status={data.state.gas} type={"gas"}/>
            <CardVentilation title={"Ventilation"} status={data.state.ventilation}/>
            <CardDoor title={"DOORS"} status={data.state.lock} />
        </div>
     );
}
 
export default CardList;