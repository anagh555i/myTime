function Eveningextra(props){
    return <>
    <div className="eveningextra" style={{display:"flex",flexDirection:"column",height:"100%"}}>
        <div className="day slot" style={{flex:"1"}}>
            17:00-17:50
        </div>
        <div className="day slot" style={{height:"7px"}}>{props.num}</div>
        <div className="slot G">G</div>
        <div className="slot F">F</div>
        <div className="slot H">H</div>
        <div className="slot G">G</div>
        <div className="slot Fplus"><div className="F">F</div>+</div>
    </div>
    </>
}

export default Eveningextra;