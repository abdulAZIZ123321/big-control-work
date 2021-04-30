import jpeg from '../../assets/images/icons/jpegIcon.svg'
import dotes from '../../assets/images/icons/dotes.svg'
import arrovToTop from '../../assets/images/icons/arrowtoTop.svg'

import './InfoStick.scss'

const InfoStick = ({ISTitle, ISText1, ISText2  }) => {
    return (
      <div className="InfoStick-wrapper">
          <div className="InfoStick-wrapper-inner">
            <div className="InfoStick-top">
              <div className="InfoStick-top-leftItems">
                  <div className="InfoStick-top-leftItems-blocks">
                    <img src={jpeg} alt="" className="InfoStick-top-leftItems-blocks__img"/>

                    <h6 className="InfoStick-top-leftItems-blocks__title">
                            {ISTitle}
                    </h6>
                  </div>
                  
              </div>

              <div className="InfoStick-top-rightItems">
                  <div className="InfoStick-top-rightItems-blocks">
                      <p className="InfoStick-text InfoStick-text--marginly ">
                            {ISText1}
                      </p>


                      <p className="InfoStick-text">
                            {ISText2}
                      </p>


                  </div>
                  <div className="InfoStick-top-rightItems-blocks">
                      <div className="small-blocks Green">
                          <img src={arrovToTop} alt="" className="InfoArrowGreen"/>
                            <button className="InfoStick-btn InfoStick-btn--green">
                                Поднять
                            </button>
                      </div>
                      <div className="small-blocks blue" >
                          <img src={arrovToTop} alt="" className="InfoArrowBlue"/>
                            <button className="InfoStick-btn InfoStick-btn--blue">
                                    Рекламировать
                            </button>
                      </div>
                      <button className="InfoStick-btn InfoStick-btn--circle">

                        <img src={dotes} alt="" className="circle-img"/>  
                        
                      </button> 
                  </div>
              </div>
          </div>

          <hr/>

          <div className="InfoStick-bottom">
              <a href="" className="InfoStick-links">
                Статистика

              </a>
              <a href="" className="InfoStick-links">
                    Просмотры: 195 
              </a>
              <a href="" className="InfoStick-links">
                       Тел.: 200   
              </a>
              <a href="" className="InfoStick-links">
                        В Избранном: 0
              </a>
            
          </div>
          </div>
      </div>
    )
}


export default InfoStick;