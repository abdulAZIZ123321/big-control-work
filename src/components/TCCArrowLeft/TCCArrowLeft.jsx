import ArrowLeft from '../../assets/images/icons/arrowLeft.svg';




import './TCCArrowLeft.scss'



const TCCArrowLeft = ({pushsherFunc}) => {
    return (
        <div className="TCCArrowLeft-wrapper">
            <img src={ArrowLeft} alt="" className="arrowLeft" onClick={pushsherFunc}/>
        </div>
    )
}


export default TCCArrowLeft;