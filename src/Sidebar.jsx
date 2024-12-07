import './Sidebar.css'

function Sidebar(props){
    return(
    <div className="sidebar" style={{
        width:`${(props.moretab)?"100px":"0px"}`,
        padding:`${(props.moretab)?"20px":"0px"}`
    }}>
        <h3>----------</h3><br />
        <h3>----------</h3><br />
        <h3>----------</h3>
    </div>);
}

export default Sidebar;