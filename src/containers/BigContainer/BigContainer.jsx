

import MTopWrap from '../MTopWrap';

import TopCarusel from '../TopCarusel';

import LinkToWrapper from '../LinkToWrapper';

import Generally from '../Generally'

import InfinityBtn from '../../components/InfinityBtn'




import './BigContainer.scss'

const BigContainer = () => {
    return (
      
            <div className="BCWrapper">
                   <MTopWrap/>

                    <TopCarusel/>

                     <LinkToWrapper/>

                    <Generally/>

                    <InfinityBtn/>

                    
            </div>
     
    )
}

export default BigContainer;