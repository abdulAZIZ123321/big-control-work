
import FCImg from '../../Atom/FCImg'
import FCTitle from '../../Atom/FCTitle'
import FCSubtitle from '../../Atom/FCSubtitle'

import officniy from '../../assets/images/officniy.png';
import noutbook from '../../assets/images/noutbook.png';
import sumka from '../../assets/images/sumka.png';


import './FCCard.scss'


let FCArr = [
    {
       
        FCImg1: officniy,
        FCTitle1: 'Техника Apple по доступным ценам',
        FCSTitle1: '987 обьявлениий'
    },
     {
       
        FCImg1: noutbook,
        FCTitle1: 'Брендовые товары закопейки',
        FCSTitle1: '987 обьявлениий'
    },
     {
       
        FCImg1: sumka,
        FCTitle1: 'Все товары дляофиса в одном месте',
        FCSTitle1: '987 обьявлениий'
    },
     {
       
        FCImg1: officniy,
        FCTitle1: 'Обуродквния из китая для малого бизнеса',
        FCSTitle1: '987 обьявлениий'
    },
     {
        
        FCImg1: sumka,
        FCTitle1: 'Все товары дляофиса в одном месте',
        FCSTitle1: '987 обьявлениий'
    },

      {
       
        FCImg1: sumka,
        FCTitle1: 'Все товары дляофиса в одном месте',
        FCSTitle1: '987 обьявлениий'
    },
     {
       
        FCImg1: officniy,
        FCTitle1: 'Обуродквния из китая для малого бизнеса',
        FCSTitle1: '987 обьявлениий'
    },
     {
        
        FCImg1: sumka,
        FCTitle1: 'Все товары дляофиса в одном месте',
        FCSTitle1: '987 обьявлениий'
    }
]

const FCCard = () => {
    return (
        

          


             
                        <>
                           
                             {
                                 FCArr.map((item) => (
                                       <div className="FCCard-wrapper">

                                         <FCImg
                                        
                                       FCImg1={item.FCImg1} 
                                       
                                      
                                        
                                        
                                        />

                                         <div className="FCCard-texts">
                                             <FCTitle
                                                FCTitle1={item.FCTitle1} 
                                            
                                            />


                                         <FCSubtitle
                                         
                                          FCSTitle1={item.FCSTitle1} 
                                         
                                         />
                                         </div>

                                       </div>
                                 ))
                             } 
                                
                               
                                



                        
                        </>

                
         
          


       
    )
}


export default FCCard;