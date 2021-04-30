


import BigContainer from '../containers/BigContainer'

import FCContainer from '../containers/FCContainer'

import BottomList from '../containers/BottomList'

import FooterTop from '../containers/FooterTop'

import FooterContainer from '../containers/FooterContainer'

import '../assets/styles/main.scss'

const MainlyPage = () => {
    return (
    
       
                        <div className="mainlyWrapper">
                        <BigContainer/>

                             <FCContainer/>  

                             <BottomList/> 

                             <FooterTop/>

                             <FooterContainer/>
                    </div>

     
    )
}

export default MainlyPage;