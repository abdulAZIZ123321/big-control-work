import forward from '../../assets/images/icons/Forward.svg'

import dotes2 from '../../assets/images/icons/dotes2.svg'

import arrowBTN from '../../assets/images/icons/ArrowBTN.svg'

import yopishtirgich from '../../assets/images/icons/yopishtirgich.svg'

import person from '../../assets/images/person.jpg'


import './ChatTyper.scss'

const ChatTyper = () => {
    return (
        <div className="ChatTyper">
          <div className="ChatTyper-Inner">
              <div className="ChatTyper-top">
                <div className="ChatTyper-top-left">
                    <div className="ChatTyper-top-left-top">
                            <img src={person} alt="" className="ChatTperImg"/>
                            <div className="">
                                <p className="ChatTyperText">
                                contact@jakubwp.com
                            </p>
                            <div className="line"></div>
                            </div>
                    </div>

                    <div className="ChatTyper-top-left-bottom">
                        <p className="ChatTyperSubText">
                            Today, 6:02 AM
                        </p>
                    </div>
                </div>

                <div className="ChatTyper-top-right">
                    <button className="CHatTyper-button">
                        <img src={forward} alt="" className="ChatBtnImg"/>
                    </button>
                    <button className="CHatTyper-button">
                        <img src={dotes2} alt="" className="ChatBtnImg"/>
                    </button>
                </div>
          </div>

          <div className="ChatTyper-bottom">
                <form action="">
                <div className="ChatTyper-bottom-top">
                    <textarea name="" id="" cols="30" rows="10" className="ChatTyperTextarea" placeholder="Hello John, I have no idea what is this message about"></textarea>
                </div>

                <div className="ChatTyper-bottom-bottom">
                        <button className="btn-file">
                            <img src={yopishtirgich} alt="" className="ChatTyperIcon"/>
                        </button>


                        <div className="ChatTyperBlock">
                            <button className="ChatTyperBtn">
                            Отправить
                            
                        </button>

                        <img src={arrowBTN} alt="" className="ChatArrow"/>
                        </div>
                </div>
                </form>
          </div>
          </div>



        </div>
    )
}


export default ChatTyper;