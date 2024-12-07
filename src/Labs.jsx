function Labs(props){
    return (
    <div className="labs verti" style={{height:"100%"}}>
        <div className="horiz" style={{}}>
            <div className="verti">
            <div className="day slot" style={{flex:"1"}}>
                {props.slot?"14:00-14:50":"9:00-9:50"}
            </div>
            <div className="day slot" style={{height:"7px"}}>{props.num}</div>
            </div>
            <div className="verti">
            <div className="day slot" style={{flex:"1"}}>
                {props.slot?"15:00-15:50":"10:00-10:50"}
            </div>
            <div className="day slot" style={{height:"7px"}}>{props.num+1}</div>
            </div>
            <div className="verti">
            <div className="day slot" style={{flex:"1"}}>
                {props.slot?"16:00-16:50":"11:00-11:50"}
            </div>
            <div className="day slot" style={{height:"7px"}}>{props.num+2}</div>
            </div>
        </div>
        <div className="verti">
            <div className="P lab">P</div>
            <div className="Q lab">Q</div>
            <div className="R lab">R</div>
            <div className="S lab">S</div>
            <div className="T lab">T</div>
        </div>
    </div>
    );
}

export default Labs;