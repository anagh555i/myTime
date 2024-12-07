import './Header.css'
import more from './assets/bars-solid.svg'
import cross from './assets/x-solid.svg'

function Header(props){
    return<>
    <div className="header horiz">
        <div className="more" onClick={()=>{
            props.setmoretab(!props.moretab);
        }}>
            {/* {(props.moretab)?<img src={cross} alt="" />:<img src={more} alt="" />} */}
            <img src={more} alt="" />
        </div>
        <h2 className="title">MyTime</h2>
        <button className="login">A</button>
    </div>
    </>
}

export default Header;