function Plusslots(props){
    return <>
    <div className="plusslots" style={{display:"flex",flexDirection:"column",height:"100%"}}>
        <div className="day slot" style={{flex:"1"}}>
            {props.time}
        </div>
        <div className="day slot" style={{height:"7px"}}>{props.num}</div>
        <div className="slot Dplus"><div className="D">D</div>+</div>
        <div className="slot Eplus"><div className="E">E</div>+</div>
        <div className="slot Aplus"><div className="A">A</div>+</div>
        <div className="slot Bplus"><div className="B">B</div>+</div>
        <div className="slot Cplus"><div className="C">C</div>+</div>
    </div>
    </>
}

export default Plusslots;