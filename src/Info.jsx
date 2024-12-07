import './Info.css'
import Randsquares from './Randsquares.jsx'

function Info(){
    return <div className='info horiz'>
    <div className="description verti">
        <h1>Make your <br />
            Personalised <br />
            Time Table <br />
        </h1>
        <h3>
            Design your timetable your way! <br />
            Customize slots and colors or pick from <br />
            a variety of prebuilt templates <br />
        </h3>
    </div>
    <Randsquares></Randsquares>
    </div>
}

export default Info;