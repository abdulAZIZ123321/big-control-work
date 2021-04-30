import {Link} from 'react-router-dom';

import './TCCard.scss'

const TCCard = ({CImg,}) => {
    return (
        <div className="TCCard-wrapper">
          
               <Link to="/" className="carusel-link">
                   <img src={CImg} alt=""  className={`carusel-img ${CImg}`}/>
               </Link>
         
        </div>
    )
}


export default TCCard;