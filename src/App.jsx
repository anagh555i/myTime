import { useState } from 'react'
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
        <Codeparse cssVariables={cssVariables} setcode={setcode}></Codeparse>
        <Download></Download>
      </div>
    </div>
  )
}

export default App
