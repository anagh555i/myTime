import './Controls.css'

function Controls(props){
    return <>
        <div className="controls">

            <div className="controlcells verti slotcontrol">
                <button className="slot1" onClick={(e)=>{props.setslot(true);}}
                style={{boxShadow:`${props.slot?"inset 1px 1px 5px 1px #e57f84":"1px 1px 5px 1px #e57f84"}`}}>
                SLOT 1</button>
                <button className="slot2" onClick={(e)=>{props.setslot(false)}}
                style={{boxShadow:`${props.slot?"1px 1px 5px 1px #e57f84":"inset 1px 1px 5px 1px #e57f84"}`}}
                >SLOT 2</button>
            </div>

            <div className="controlcells verti me">
                <div className="horiz">
                <h3> 8:00-8:50 SLOT </h3>
                <div className="toggle" style={{
                    justifyContent:`${props.mextra?"flex-end":"flex-start"}`
                }} onClick={()=>props.setmextra(!props.mextra)}>
                    <div className="circle" style={{
                        backgroundColor:`${props.mextra?"#2f5061":"#e57f84"}`
                    }}></div>
                </div>
                </div>
                <div className="horiz">
                <h3> 5:00-5:50 SLOT </h3>
                <div className="toggle" style={{
                    justifyContent:`${props.eextra?"flex-end":"flex-start"}`
                }} onClick={()=>props.seteextra(!props.eextra)}>
                    <div className="circle" style={{
                        backgroundColor:`${props.eextra?"#2f5061":"#e57f84"}`
                    }}></div>
                </div>
                </div>
            </div>

            <div className="controlcells verti cc3">
                    <h3>Margin</h3>
                    <input type="range" className='rangeinput' min={0} max={4} onChange={(e)=>{
                        document.documentElement.style.setProperty("--margin",`${e.target.value}px`);
                        props.setcode();
                    }}/>
                    <div className="horiz colorchanger">
                    <h3>Table Color </h3>
                    <input type="color" name="" id="" onChange={(e)=>{
                        document.documentElement.style.setProperty("--tablecolor",`${e.target.value}`);
                        props.setcode();
                    }}/>
                    </div>
                    <div className="horiz colorchanger">
                    <h3>Background Color </h3>
                    <input type="color" name="" id="" onChange={(e)=>{
                        document.documentElement.style.setProperty("--backgroundcolor",`${e.target.value}`);
                        props.setcode();
                    }}/>
                    </div>
            </div>

            <div className="controlcells verti cc4">
                    <h3>Border weight</h3>
                    <input type="range" className='rangeinput' min={0} max={4} onChange={(e)=>{
                        // console.log(e.target.value);
                        document.documentElement.style.setProperty("--borderweight",`${e.target.value}px`);
                        props.setcode();
                    }}/>
                    <h3>Border Radius</h3>
                    <input type="range" className='rangeinput' min={0} max={10} onChange={(e)=>{
                        document.documentElement.style.setProperty("--borderradius",`${e.target.value}px`);
                        props.setcode();
                    }}/>
                    <div className="horiz colorchanger">
                    <h3>Border color </h3>
                    <input type="color" name="" id="" onChange={(e)=>{
                        // console.log(e.target.value);
                        document.documentElement.style.setProperty("--bordercolor",`${e.target.value}`);
                        props.setcode();
                    }}/>
                    </div>
                    
            </div>

            <div className="controlcells verti">
                <div className="horiz colorchanger">
                <h3>Header Color</h3>
                <input type="color" name="" id="" onChange={(e)=>{
                        document.documentElement.style.setProperty("--headcolor",`${e.target.value}`);
                        props.setcode();
                }}/>
                </div>
                <div className="horiz colorchanger">
                <h3>Header Text</h3>
                <input type="color" name="" id="" onChange={(e)=>{
                        document.documentElement.style.setProperty("--headertext",`${e.target.value}`);
                        props.setcode();
                }}/>
                </div>
                <div className="horiz colorchanger">
                <h3>Lunch Color</h3>
                <input type="color" name="" id="" onChange={(e)=>{
                        document.documentElement.style.setProperty("--lunchcolor",`${e.target.value}`);
                        props.setcode();
                }}/>
                </div>
                <div className="horiz colorchanger">
                <h3>Slot Text</h3>
                <input type="color" name="" id="" onChange={(e)=>{
                        document.documentElement.style.setProperty("--slotcolor",`${e.target.value}`);
                        props.setcode();
                }}/>
                </div>
            </div>
        </div>
    </>
}

export default Controls;