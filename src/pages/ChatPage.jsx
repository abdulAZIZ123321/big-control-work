import ChatWrapper from '../containers/ChatWrapper'

import NewHeader from '../containers/NewHeader'

import '../assets/styles/main.scss'

const ChatPage = () => {
    return (
    
       
                        <div className="ChatPage">

                            <NewHeader/>
                      
                           <div className="special">
                                <ChatWrapper/>
                           </div>


                    </div>

     
    )
}

export default ChatPage;