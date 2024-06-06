import {data} from "./data"
import Card from "./Card"
export default function App(){
    const showElements = data.map((elm, index) => (<Card key={index} img={elm.img} title={elm.title} rate={elm.rate} desc={elm.desc} date={elm.date} price={elm.price}/>));
    return <div style={{ display: "flex", justifyContent: "center", flexDirection: "row", flexWrap: "wrap", gap: "20px"}}>{showElements}</div>;
   
}