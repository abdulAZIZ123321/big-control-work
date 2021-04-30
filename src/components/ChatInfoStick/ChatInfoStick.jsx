import yopishtirgich from '../../assets/images/icons/yopishtirgich.svg'


import './ChatInfoStick.scss'

const ChatInfoStick = ({ChatImg, ChatText1, ChatText2, ChatText3 }) => {
    return (
        <div className="ChatInfoStick">
          <div className="ChatInfoStick-inner">
              <div className="ChatInfoStick-left">
                <img src={ChatImg} alt="" className="ChatImg"/>

                <div className="ChatInfoStick-texts">
                    <p className="Chat-text">{ChatText1}</p>
                    <p className="Chat-text Chat-text--big">{ChatText2}</p>
                </div>
          </div>

          <div className="ChatInfoStick-right">
                <img src={yopishtirgich} alt="" className="ChatIcon"/>

                <p className="Chat-text Chat-text--colorly">{ChatText3}</p>
          </div>

          </div>


        </div>
    )
}


export default ChatInfoStick;