import InfoStick from '../../components/InfoStick'

import './InfoStickWrapper.scss'

 
let infoSArr = [
    {
        ISTitle: 'Срочно нужен программист yii2',
        ISText1: '2 000 000 6 000 000 сум',
        ISText2: '# 345 002 С: 28 июнь По: 28 июль'
    },

    {
        ISTitle: 'Срочно нужен программист yii2',
        ISText1: '2 000 000 6 000 000 сум',
        ISText2: '# 345 002 С: 28 июнь По: 28 июль'
    },

    {
        ISTitle: 'Срочно нужен программист yii2',
        ISText1: '2 000 000 6 000 000 сум',
        ISText2: '# 345 002 С: 28 июнь По: 28 июль'
    },

    {
        ISTitle: 'Срочно нужен программист yii2',
        ISText1: '2 000 000 6 000 000 сум',
        ISText2: '# 345 002 С: 28 июнь По: 28 июль'
    },

    {
        ISTitle: 'Срочно нужен программист yii2',
        ISText1: '2 000 000 6 000 000 сум',
        ISText2: '# 345 002 С: 28 июнь По: 28 июль'
    }

   
]


const InfoStickWrapper = () => {
    return (
        

          


             
                        <div className="container">
                            <div className="InfoStickWrapper">
                  
                                    <div className="InfoWrap">
                                        <div className="InfoWrap-left">
                                                <h6 className="InfoWrap-title">
                                                    Фото      		
                                                </h6>
                                                <h6 className="InfoWrap-title">Название</h6>
                                        </div>

                                        <div className="InfoWrap-right">
                                                <h6 className="InfoWrap-title">Цена </h6>
                                                <h6 className="InfoWrap-title"> Дата </h6>
                                                <h6 className="InfoWrap-title">Действие</h6>
                                        
                                        </div>
                                    </div>

                                    <div className="">
                                        {
                                           infoSArr.map((item) => (
                                               <InfoStick
                                               
                                               ISTitle={item.ISTitle}
                                               ISText1={item.ISText1}
                                               ISText2={item.ISText2}
                                               
                                               
                                               />
                                           )) 
                                        }
                                    </div>

                        
                        </div>

                        </div>
                
         
          


       
    )
}


export default InfoStickWrapper;