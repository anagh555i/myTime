import './Timetable.css'
import Morningextra from './Morningextra.jsx'
import Subjects from './Subjects.jsx'
import Lunch from './Lunch.jsx'
import Plusslots from './Plusslots.jsx'
import Labs from './Labs.jsx'
import Days from './Days.jsx'
import Eveningextra from './Eveningextra.jsx'
import copy from './assets/copy.svg'

function Timetable(props){
    let num=1+(props.mextra?1:0);
    return<>
    <div className="background verti" id='TimeTable'>
    <div className="horiz table" id='table' >
        <div ><Days></Days></div>
        {props.mextra?<Morningextra></Morningextra>:null}
        {props.slot?<Subjects slot={props.slot} mextra={props.mextra}></Subjects>:null}
        {props.slot?null:<Labs num={props.slot?num+4:num} slot={props.slot}></Labs>}
        <div>{props.slot?null:<Lunch></Lunch>}</div>
        <Plusslots num={num+3} time={props.slot?"12:00-12:50":"1:00-1:50"} ></Plusslots>
        <div>{props.slot?<Lunch></Lunch>:null}</div>
        {props.slot?null:<Subjects slot={props.slot} mextra={props.mextra}></Subjects>}
        {props.slot?<Labs num={props.slot?num+4:num} slot={props.slot}></Labs>:null}
        {props.eextra?<Eveningextra num={num+7}></Eveningextra>:null}
    </div>
    <br />
    <div className="code horiz" style={{gap:"10px",alignItems:"center"}}>
        <button onClick={(e)=>{
            navigator.clipboard.writeText(props.code);
            const copied=document.getElementById("copied");
            copied.innerText="Copied to clipboard";
            copied.style.color="grey";
            setTimeout(()=>{copied.style.color="transparent";},500);
            setTimeout(()=>{copied.innerText="";},1000);
        }} style={{padding:"10px"}}> <img src={copy} alt="copy" style={{width:"25px"}}/> </button>
        {props.code}
    </div>
    <div id="copied" style={{
        paddingTop:"10px",
        transition:"ease,0.25s",
        color:"transparent",
        height:"0px"
    }}></div>
    </div>
    </>
}

export default Timetable;