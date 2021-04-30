import PathTo from '../../components/PathTo'
import BigTitle from '../../Atom/BigTitle'
import SingleLeft from '../SingleLeft'
import SingleRight from '../SingleRight'

import './SingleMain.scss'

const SingleMain = () => {
    return (
     <div className="container">
        <div className="SingleMain">
          <PathTo/>
          <BigTitle/>
         <div className="SingleMain-right">
            <SingleLeft/>
            <SingleRight/>
         </div>
      </div>
     </div>
    )
}


export default SingleMain;