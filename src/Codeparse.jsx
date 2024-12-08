function Codeparse(props){
    return <>
    <div className="codeparse horiz">
        <input type="text" name="" id="stylecode" placeholder="Generate design using Style Code" />
        <button onClick={()=>{
            const stylecode=document.getElementById("stylecode").value;
            props.generateDesign(stylecode);
        }}>Generate</button>
    </div>
    </>
}

export default Codeparse;