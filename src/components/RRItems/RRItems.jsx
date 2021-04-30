import kivi from '../../assets/images/icons/kiviRegister.svg'

import backImg from '../../assets/images/registerImg.jpg'

import './RRItems.scss'

const RRItems = () => {
    return (
    
       
                        <div className="RRItems">
                            
                         
                                <img src={backImg} alt="" className="RImg"/>

                            <div className="RRItems-right">
                                <div className="RRItems-right-inner">
                                    <img src={kivi} alt="" className="kiviLogo"/>
                                <p className="RRItems-text">
                                    Откройте для себя 
                                        целую плошадку
                                        для продаже
                                </p>
                                <button className="RRItems-btn">Как это делать?</button>
                                </div>
                            </div>
                       



                    </div>

     
    )
}

export default RRItems;