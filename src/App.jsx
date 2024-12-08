import { useState ,useEffect} from 'react'
import './App.css'
import Header from './Header.jsx'
import Sidebar from './Sidebar.jsx'
import Info from './Info.jsx'
import Controls from './Controls.jsx'
import Timetable from './Timetable.jsx'
import Slotvalues from './Slotvalues.jsx'
import Download from './Download.jsx'
import Codeparse from './Codeparse.jsx'
import Designs from './Designs.jsx'

function App() {
  const [moretab,setmoretab]=useState(false);
  const [slot,setslot]=useState(true); // true=>Morning slot
  const [mextra,setmextra]=useState(true); // whether to include morning extra slot
  const [eextra, seteextra]=useState(true); // whether to include evening extra slot

  const cssVariables=["","--margin","--borderweight","--borderradius","--slotcolor","--lunchcolor","--tablecolor","--headcolor","--backgroundcolor",
                      "--bordercolor","--headertext","--Acolor","--Bcolor",
                      "--Ccolor","--Dcolor","--Ecolor","--Fcolor","--Gcolor","--Hcolor","--Pcolor","--Qcolor",
                      "--Rcolor","--Scolor","--Tcolor"
  ];
  const rootstyle=getComputedStyle(root);
  const [code,setCode]=useState("code here");

  const setcode=()=>{
    setCode(cssVariables.reduce((acc,it)=>{
      return acc+rootstyle.getPropertyValue(it);
    }));
  }
  
  const [temp,...cssVar]=cssVariables;
  function generateDesign(stylecode){
    if(stylecode.length!=149){
        console.error("Invalid code");
        return;
    }
    let values=[stylecode.substring(0,3),stylecode.substring(3,6),stylecode.substring(6,9)];
    let i=9
    for(;i<149;i+=7){
        values.push(stylecode.substring(i,i+7));
    }
    i=0;
    cssVar.forEach(el=>{
        document.documentElement.style.setProperty(el,`${values[i++]}`);
    });
    setcode();
  }

  useEffect(()=>{
    console.log("useeffect");
    generateDesign("3px0px7px#ffffff#ff0000#474747#999999#000000#808080#ffffff#0044b3#750000#55ccce#1bb14f#9e23af#fe9090#f7b8ff#a9befe#479a8c#51bd42#bdc733#cc7228#f23a3a");
  },[]);

  return (
    <div className='horiz' style={{
      width:"100%",
    }}>
      <Sidebar moretab={moretab}></Sidebar>
      <div className="content">
        <Header moretab={moretab} setmoretab={setmoretab}></Header>
        <Info></Info>
        <Controls slot={slot} setslot={setslot} 
                  mextra={mextra} setmextra={setmextra}
                  eextra={eextra} seteextra={seteextra}
                  setcode={setcode}>
        </Controls>
        <Designs setcode={setcode}></Designs>
        <Timetable slot={slot} mextra={mextra} eextra={eextra} code={code}></Timetable>
        <Slotvalues setcode={setcode}></Slotvalues>
        <Codeparse generateDesign={generateDesign}></Codeparse>
        <Download></Download>
      </div>
    </div>
  )
}

export default App
