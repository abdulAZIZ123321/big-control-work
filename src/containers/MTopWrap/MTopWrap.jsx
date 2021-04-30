import MainlyTop from '../MainlyTop';
import MainlySel from '../MainlySelecter'

import './MTopWrap.scss'

const MTopWrap = () => {
    return (
        <div className="MTW-wrapper">
            <MainlyTop/>

            <MainlySel/>
        </div>
    )
}


export default MTopWrap;