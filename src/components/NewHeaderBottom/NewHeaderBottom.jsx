import blackPlus from '../../assets/images/icons/blackPlus.svg'


import './NewHeaderBottom.scss'



const NewHeaderBottom = () => {
    return (
        <div className="container">
            <div className="NewHeaderBottom-wrapper">
            <div className="NewHeaderBottom-top">
                <div className="NewHeaderBottom-top-left">
                    <h6 className="NewHeaderBottom-title">
                            Здравствуйте Зухриддин Темиров
                    </h6>
                </div>

                <div className="NewHeaderBottom-top-right">
                    <span className="NewHeaderBottom-span">
                            Ваш счет: 2 3000 сум
                    </span>

                    <div className="black-wrap">
                                <img src={blackPlus} alt="" className="NewHeaderBottom-img"/>
                            <button className="NewHeaderBottom-btn">
                                    Пополнить
                            </button>
                    </div>
                </div>


            </div>

            <hr/>

            <div className="NewHeaderBottom-bottom">
                <a href="" className="NewHeaderBottom-links">
                    Объявления 
                </a>
                <a href="" className="NewHeaderBottom-links">Сообщения </a>
                <a href="" className="NewHeaderBottom-links">Платежи и счёт   </a>
                <a href="" className="NewHeaderBottom-links">Настройки </a>
                <a href="" className="NewHeaderBottom-links">  Мой бизнес</a>
              
            </div>
        </div>
        </div>
    )
}


export default NewHeaderBottom;