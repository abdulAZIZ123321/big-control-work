import MTopWrap from '../containers/MTopWrap'

import FooterTop from '../containers/FooterTop'

import FooterContainer from '../containers/FooterContainer'

import SingleMain from '../containers/SingleMain'

import BottomList from '../containers/BottomList'


import '../assets/styles/main.scss'



const SinglePage = () => {
    return (
        <div className="singleWrapper ">
             <MTopWrap/>
             <SingleMain/>
              <BottomList/> 
          
            <FooterTop/>

            <FooterContainer/>

             
        </div>
    )
}


export default SinglePage;