import arrowRight from '../../assets/images/icons/arrowRight.svg'


import './TCCArrowRight.scss'

const TCCArrowRight = ({pushsherFunc2}) => {
    return (
        <div className="TCCArrowRight-wrapper">
            <img src={arrowRight} alt="" className="arrowRight" onClick={pushsherFunc2}/>
        </div>
    )
}


export default TCCArrowRight;