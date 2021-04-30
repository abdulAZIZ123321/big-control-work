import FLogosText from '../../Atom/FLogosText'
import FTImg from '../../Atom/FTImg'
import FTText from '../../Atom/FTText'
import Logo2 from '../../assets/images/icons/logo2.svg'
import FTApp from '../../Atom/FTApp'
import FTGoogle from '../../Atom/FTGoogle'
import Google from '../../assets/images/icons/AndroidGoogleMarket.svg'
import AppStore from '../../assets/images/icons/AppStore.svg'

import './FTItems.scss'

const FTItems = () => {
    return (
        

          


             
                     
                                <div className="FTItems-wrapper">
                                
                                   <div className="logo-text">
                                          <FTImg  FTImg={Logo2}/>
                                    <FLogosText FLtext="Продай, найди, купи все что ты пожелаешь "/>
                                   </div>
                                  
                                    <FTText 
                                    
                                    FTtext="Веб сайт бесплатных обьявлений | на базе имеется 234 944 999 шт обяления"
                                    
                                    />

                               <div className="">
                                        <FTApp FTAImg={AppStore}/>
                                    <FTGoogle FTGImg={Google}/>
                               </div>


                                
                                </div>
                      

                
         
          


       
    )
}


export default FTItems;