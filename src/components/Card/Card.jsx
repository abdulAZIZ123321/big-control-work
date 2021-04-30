import {Link} from 'react-router-dom'


import './Card.scss'

const Card = ({CardImg, CardTitle, CardTime, CardPrice}) => {
    return (
        <div className="Card-wrapper">
            <Link to="/singlePage" className="Card-wrap-first">
                <img src={CardImg} alt="" className="card-img" width="262" height="190"/>

                <h4 className="card-title">{CardTitle}</h4>
            </Link>

            <div className="Card-wrap-second">
                <p className="card-time">{CardTime}</p>

                <p className="card-price">{CardPrice}</p>
            </div>
        </div>
    )
}


export default Card;