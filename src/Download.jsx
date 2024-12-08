import html2canvas from 'html2canvas';
import download from './assets/download.svg'
import { useState } from 'react';

function Download(){
    const [mode,setMode]=useState(true);

    async function fullcontent(){
        const el=document.getElementById("TimeTable");
        document.getElementById("TimeTable").style.alignItems="center";
        document.getElementById("table").style.margin="100px 0px 100px 0px";
        document.documentElement.style.setProperty("--canvassize",`${el.offsetWidth}px`);
        const canvas= await html2canvas(el);
        document.getElementById("TimeTable").style.alignItems="flex-start";
        document.getElementById("table").style.margin="0px";
        const ss=canvas.toDataURL("image/jpeg");
        const a=document.createElement("a");
        a.href=ss;
        a.download="Timetable.jpeg";
        a.click();
    }
    async function tableonly(){
        const el=document.getElementById("table");
        document.documentElement.style.setProperty("--canvassize",`${el.offsetWidth}px`);
        const prev=el.style.borderRadius;
        el.style.borderRadius="0px";
        const canvas= await html2canvas(el);
        el.style.borderRadius=prev;
        const ss=canvas.toDataURL("image/png");
        const a=document.createElement("a");
        a.href=ss;
        a.download="Timetable.png";
        a.click();
    }

    return <div style={{width:"100%",justifyContent:"center",alignItems:"center"}} className='verti'>
    <div className='horiz ' style={{color:"#2f5061",gap:"10px",paddingTop:"20px"}}>
        <h3>Include Background </h3>
        <div className="toggle" style={{
        justifyContent:`${mode?"flex-end":"flex-start"}`
        }} onClick={()=>setMode(!mode)}>
        <div className="circle" style={{
            backgroundColor:`${mode?"#2f5061":"#e57f84"}`
        }}></div>
    </div>
    </div>
    
    <button className='horiz download' onClick={(e)=>{
        if(mode) fullcontent();
        else tableonly();
    }} style={{width:"150px"}}>
        <h3>Download</h3>
        <img src={download} alt="" />
    </button>
    </div>
}

export default Download;