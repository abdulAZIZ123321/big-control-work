import './Linkto.scss'
import {Link} from 'react-router-dom';

const Linkto = () => {
    return (
        <div className="LT-wrapper">
            <Link to="/" className="m-links m-links--simple">
               Вход    
            </Link>

            <Link to="/register" className="m-links m-links--borderly">
                Регистрация
            </Link>
        </div>
    )
}


export default Linkto;