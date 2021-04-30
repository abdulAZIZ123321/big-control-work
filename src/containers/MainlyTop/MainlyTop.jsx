import Logo from '../../components/MainlyTopItems/Logo';
import Linkto from '../../components/MainlyTopItems/Linkto';
import LangChanger from '../../components/MainlyTopItems/LangChanger';



import './MainlyTop.scss'

const MainlyTop = () => {
    return (
        <div className="container">
            <div className="MT-wrapper">
            <Logo/>
            <div className="MT-right">
                <LangChanger/>
                <Linkto/>
            </div>
            
        </div>
        </div>
    )
}


export default MainlyTop;