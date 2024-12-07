function Designs(props){
    const cssVar=["--margin","--borderweight","--borderradius","--slotcolor","--lunchcolor","--tablecolor","--headcolor","--backgroundcolor",
                      "--bordercolor","--headertext","--Acolor","--Bcolor",
                      "--Ccolor","--Dcolor","--Ecolor","--Fcolor","--Gcolor","--Hcolor","--Pcolor","--Qcolor",
                      "--Rcolor","--Scolor","--Tcolor"];
    function setDesign(stylecode){
        let values=[stylecode.substring(0,3),stylecode.substring(3,6),stylecode.substring(6,9)];
        let i=9
        for(;i<149;i+=7){
            values.push(stylecode.substring(i,i+7));
        }
        i=0;
        cssVar.forEach(el=>{
            document.documentElement.style.setProperty(el,`${values[i++]}`);
        });
        props.setcode();
    }
    return <div className="designs">
        <div className="dropmenu">
            <h3>Quick Layouts ^-^</h3>
            <div className="options">
                <button onClick={()=>{
                    setDesign("0px1px0px#042748#d1d1d1#696b7b#d1d1d1#000000#918c83#737373#618ebb#f0bdd0#fcf4e3#35e381#e1dd66#ff4d8b#ffa424d7e14#2#405d7d#70384c#00941e#c79c00#004ac2");
                }}>Design 1</button>
                <button onClick={()=>{
                    setDesign("3px0px7px#ffffff#ff0000#474747#999999#000000#808080#ffffff#0044b3#750000#55ccce#1bb14f#9e23af#fe9090#f7b8ff#a9befe#479a8c#51bd42#bdc733#cc7228#f23a3a");
                }}>Design 2</button>
                <button onClick={()=>{
                    setDesign("4px4px9pxx#4e6488#9ee6e#b8c9ff#b8c9ff#000000#ffffffd#39426#ee00ff#0091ff#ff0095#66ff00#ffd500#302c2c#1700c7#a80000#5c0075#007fe0#e00083#45ad00#d1ae00");
                }}>Design 3</button>
                <button onClick={()=>{
                    setDesign("1px2px3px#000000#6e8e96#6e8e96#6e8e96#000000#000000#ffffff#ff0033#0091ff#fff700#ffffff#00ff4c#ff00bb#ffffff#00bfff#ff8ace#f0f0f0#d1d1d1#a3a3a3#787878");
                }}>Design 4</button>
                <button onClick={()=>{
                    setDesign("1px2px0px#000000#229b62#00ff9d#229b62#00422c#005c23#ffffff#ff0033#0091ff#fff700#ffffff#ff9500#ff00bb#ffffff#00bfff#00ff59#00db4d#02bb43#009434#007027");
                }}>Design 5</button>
                <button onClick={()=>{
                    setDesign("1px2px0px#000000#004280#00eeff#22939b#002942#00515c#ffffff#ff0033#44ff00#fff700#878787#ff9500#ff00bb#ffffff#0044cc#00fffb#00d8db#02bbae#009483#006970");
                }}>Design 6</button>
            </div>
        </div>
    </div>
}

export default Designs;