import html2canvas from 'html2canvas';
import download from './assets/download.svg'

function Download(){
    async function handleclick(){
        const el=document.getElementById("TimeTable");
        document.getElementById("TimeTable").style.alignItems="center";
        document.getElementById("table").style.margin="100px 0px 100px 0px";
        const canvas= await html2canvas(el);
        document.getElementById("TimeTable").style.alignItems="flex-start";
        document.getElementById("table").style.margin="0px";
        const ss=canvas.toDataURL("image/jpeg");
        const a=document.createElement("a");
        a.href=ss;
        a.download="Timetable.jpeg";
        a.click();
    }

    return <div style={{width:"100%",display:"flex",justifyContent:"center"}}>
    <button className='horiz download' onClick={(e)=>{
        handleclick();
    }}>
        <h3>Download</h3>
        <img src={download} alt="" />
    </button>
    </div>
}

export default Download;