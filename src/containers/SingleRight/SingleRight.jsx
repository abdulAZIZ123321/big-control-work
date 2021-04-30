import {Link} from 'react-router-dom'


import SRItems1 from '../../components/SRItems1'
import SRItems2 from '../../components/SRItems2'
import SRItems3 from '../../components/SRItems3'
import SingleBtn from '../../components/SingleBtn'
import SBlueBtn from '../../components/SBlueBtn'
import SingleTable from '../../components/SingleTable'



import './SingleRight.scss'



const SingleRight = () => {
    return (
      <div className="SingleRight">
          <SRItems1/>
          <SRItems2/>
          <SingleBtn/>
           <SingleBtn/>
           <SRItems3/>
          <Link to="/chatPage">
             <SBlueBtn SBBtext="Написать автору"/>
          </Link>
           <SBlueBtn SBBtext="Предложить свою цену"/>
          <SingleTable/>
           
      </div>
    )
}


export default SingleRight;

