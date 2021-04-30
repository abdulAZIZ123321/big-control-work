import './Logo.scss'

import Logo1 from '../../../assets/images/icons/logo.svg'

const Logo = () => {
    return (
        <div className="logo-wrapper">
            <img src={Logo1} alt="Logo" className="logo"/>
        </div>
    )
}


export default Logo;