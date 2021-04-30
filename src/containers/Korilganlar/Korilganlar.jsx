import './Korilganlar.scss'

import oshxona from '../../assets/images/oshxona.jpg'
import xonaMebel from '../../assets/images/xonaMebel.jpg'
import nabor from '../../assets/images/nabor.jpg'
import yotoq from '../../assets/images/yotoq.jpg'


import Card from '../../components/Card'


let KorilganArr = [
    {
        CardImg: nabor,
        CardTitle: 'Светодиодная лампа с фронтальным стеклом 10шт',
        CardTime: 'Вчера 22:55',
        CardPrice: '39 000 000 сум'
    },

    {
        CardImg: xonaMebel,
        CardTitle: 'Коттедж 424 м² на участке 22.6 сот.',
        CardTime: 'Вчера 22:55',
        CardPrice: '39 000 000 сум'
    },

    {
        CardImg: oshxona,
        CardTitle: '2-к квартира, 55 м², 3/5 эт.',
        CardTime: 'Вчера 22:55',
        CardPrice: '39 000 000 сум'
    },


    {
        CardImg: yotoq,
        CardTitle: 'Кровать с закроватным модулем+ матрас Вита 160',
        CardTime: 'Вчера 22:55',
        CardPrice: '39 000 000 сум'
    }


]

const Korilganlar = () => {
    return (
        

          


             
                     
                               <div className="container">
                                    <div className="Korilganlar-wrapper">
                                
                                    
                                    {
                                        KorilganArr.map((item) => (
                                            <Card
                                            
                                            CardImg={item.CardImg}
                                            CardTitle={item.CardTitle}
                                            CardTime={item.CardTime}
                                            CardPrice={item.CardPrice}
                                            
                                            
                                            
                                            />
                                        ))
                                    }
                                            

                                
                                </div>
                               </div>
                      

                
         
          


       
    )
}


export default Korilganlar;