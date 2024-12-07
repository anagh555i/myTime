function Subjects(props){
    let num=1+(props.mextra?1:0);
    return <>
    <div className="subjects horiz" style={{height:"100%"}}>
        <div style={{display:"flex",flexDirection:"column",height:"100%"}}>
        <div className="day slot" style={{flex:"1"}}>
                {props.slot?"9:00-9:50":"2:00-2:50"}
        </div>
        <div className="day slot" style={{height:"7px"}}>{props.slot?num:num+4}</div>
        <div className="slot A">A</div>
        <div className="slot B">B</div>
        <div className="slot C">C</div>
        <div className="slot D">D</div>
        <div className="slot E">E</div>
        </div>
        <div style={{display:"flex",flexDirection:"column",height:"100%"}}>
        <div className="day slot" style={{flex:"1"}}>
                {props.slot?"10:00-10:50":"3:00-3:50"}
        </div>
        <div className="day slot" style={{height:"7px"}}>{props.slot?num+1:num+5}</div>
        <div className="slot B">B</div>
        <div className="slot C">C</div>
        <div className="slot D">D</div>
        <div className="slot E">E</div>
        <div className="slot A">A</div>
        </div>
        <div style={{display:"flex",flexDirection:"column",height:"100%"}}>
        <div className="day slot" style={{flex:"1"}}>
                {props.slot?"11:00-11:50":"4:00-4:50"}
        </div>
        <div className="day slot" style={{height:"7px"}}>{props.slot?num+2:num+6}</div>
        <div className="slot C">C</div>
        <div className="slot D">D</div>
        <div className="slot E">E</div>
        <div className="slot A">A</div>
        <div className="slot B">B</div>
        </div>
    </div>
        
        
    </>
}

export default Subjects;