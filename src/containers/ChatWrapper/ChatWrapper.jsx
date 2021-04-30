import ChatInfoStick from '../../components/ChatInfoStick'
import ChatTyper from '../../components/ChatTyper'

import person from '../../assets/images/person.jpg'


import './ChatWrapper.scss'

 
let chatArr = [
    {
        ChatImg: person,
        ChatText1: 'Nematulloh Afri',
        ChatText2: 'Продаётся Samsung 27" Full HD',
        ChatText3: '13 июнь, 10:33'
    },
    {
        ChatImg: person,
        ChatText1: 'Nematulloh Afri',
        ChatText2: 'Продаётся Samsung 27" Full HD',
        ChatText3: '13 июнь, 10:33'
    },
    {
        ChatImg: person,
        ChatText1: 'Nematulloh Afri',
        ChatText2: 'Продаётся Samsung 27" Full HD',
        ChatText3: '13 июнь, 10:33'
    },
    {
        ChatImg: person,
        ChatText1: 'Nematulloh Afri',
        ChatText2: 'Продаётся Samsung 27" Full HD',
        ChatText3: '13 июнь, 10:33'
    },
    {
        ChatImg: person,
        ChatText1: 'Nematulloh Afri',
        ChatText2: 'Продаётся Samsung 27" Full HD',
        ChatText3: '13 июнь, 10:33'
    },
    {
        ChatImg: person,
        ChatText1: 'Nematulloh Afri',
        ChatText2: 'Продаётся Samsung 27" Full HD',
        ChatText3: '13 июнь, 10:33'
    },
    {
        ChatImg: person,
        ChatText1: 'Nematulloh Afri',
        ChatText2: 'Продаётся Samsung 27" Full HD',
        ChatText3: '13 июнь, 10:33'
    },
    {
        ChatImg: person,
        ChatText1: 'Nematulloh Afri',
        ChatText2: 'Продаётся Samsung 27" Full HD',
        ChatText3: '13 июнь, 10:33'
    },
    {
        ChatImg: person,
        ChatText1: 'Nematulloh Afri',
        ChatText2: 'Продаётся Samsung 27" Full HD',
        ChatText3: '13 июнь, 10:33'
    },
    {
        ChatImg: person,
        ChatText1: 'Nematulloh Afri',
        ChatText2: 'Продаётся Samsung 27" Full HD',
        ChatText3: '13 июнь, 10:33'
    },
    {
        ChatImg: person,
        ChatText1: 'Nematulloh Afri',
        ChatText2: 'Продаётся Samsung 27" Full HD',
        ChatText3: '13 июнь, 10:33'
    }
    
]

const ChatWrapper = () => {
    return (
        

          


             
                        <div className="container">
                            <div className="ChatWrapper">
                                <div className="">
                                    {
                                        chatArr.map((item) => (
                                            <ChatInfoStick
                                            
                                            ChatImg={item.ChatImg}
                                            ChatText1={item.ChatText1}
                                            ChatText2={item.ChatText2}
                                            ChatText3={item.ChatText3}
                                            
                                            
                                            />
                                        ))
                                    }
                                </div>
                                <ChatTyper/>
                        </div>
                        </div>

                
         
          


       
    )
}


export default ChatWrapper;