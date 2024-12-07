import './Slotvalues.css'

function Slotvalues(props){
    const arr=["A","B","C","D","E","F","G","H","P","Q","R","S","T"];
    const elements=arr.map((s)=>{
        return (
        <div className="slotpar horiz" key={s}>
            <h3>SLOT {s}</h3>
            <input type="text"  onChange={(e)=>{
                document.querySelectorAll(`.${s}`).forEach(el=>{
                    el.innerHTML=e.target.value;
                });
            }}/>
            <input type="color" name="" id="" onChange={(e)=>{
                document.documentElement.style.setProperty(`--${s}color`,`${e.target.value}`);
                props.setcode();
            }}/>
        </div> );
    })
    return <>
    <div className="slotvalues horiz">
        {elements}
    </div>
    </>
}

export default Slotvalues;