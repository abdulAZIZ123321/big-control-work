import {Link} from 'react-router-dom'

import Logo from '../MainlyTopItems/Logo';
import Linkto from '../MainlyTopItems/Linkto';
import LangChanger from '../MainlyTopItems/LangChanger';
import AdderBtn from '../MainlySelItems/AdderBtn';
import SearcherPart from '../MainlySelItems/SearcherPart'


import './NewHeaderTop.scss'

const NewHeaderTop = () => {

    return (
    
        <div className="NewHeaderTop">
                    <div className="container">
                            <div className="NHT-wrapper">



                                        <div className="">
                                                <Logo/>
                                        </div>

                                            <div className="NHT-centre">
                                                <Link to="/settingsPage" className="NHT-links">
                                                    Объявления                              
                                                </Link>
                                                <Link to="" className="NHT-links">Магазины </Link>
                                                <Link to="/chatPage" className="NHT-links">Для бизнеса </Link>
                                                <Link to="/infoPage" className="NHT-links"> Помощь</Link>
                                            </div>
        
                        
                                            <div className="NHT-right">
                                                <LangChanger/>
                                                <Linkto/>
                                            </div>
                            
                        </div>
                </div>


                            <div className="container">
                                            <div className="NHT2-wrapper">
                                                <SearcherPart/>
                                                <AdderBtn/>
                                            </div>
                    </div>
        </div>



    )
}


export default NewHeaderTop;