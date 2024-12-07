function Codeparse(props){
    const [temp,...cssVar]=props.cssVariables;
    function handleClick(){
        const stylecode=document.getElementById("stylecode").value;
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
        props.setcode();
    }
    return <>
    <div className="codeparse horiz">
        <input type="text" name="" id="stylecode" placeholder="Generate design using Style Code" />
        <button onClick={()=>{
            handleClick();
        }}>Generate</button>
    </div>
    </>
}

export default Codeparse;