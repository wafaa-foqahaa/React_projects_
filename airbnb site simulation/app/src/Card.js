export default function Card(props){
    return (
        <div style={{width:"300px"}}>
            <div style={{backgroundImage: `url(${props.img})`, width:"300px", height:"300px", backgroundRepeat: "no - repeat", backgroundSize: "cover", borderRadius: "15px", backgroundPosition: "center"}}><i class="fa-solid fa-heart" style={{display:"flex", justifyContent: "right", padding:"20px 20px", fontSize:"20px", color: "#000"}}></i></div>
            <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0"}}>
                <h1 style={{fontSize: "15px"}}>{props.title}</h1>
                <span style={{fontSize: "15px"}}>  <i className="fa-sharp fa-solid fa-star" style={{fontSize: "12px"}}></i> {props.rate}</span>
            </div>
            <p style= {{color:"grey", marginTop: "0"}}>{props.desc} <br/> {props.date}</p>
            <h1 style={{fontSize: "15px"}}>${props.price} <span style= {{fontWeight: "normal"}}>night</span></h1>
        </div>
    );

}