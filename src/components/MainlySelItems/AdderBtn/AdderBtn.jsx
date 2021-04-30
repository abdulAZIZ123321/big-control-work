import Plus from '../../../assets/images/icons/plus.svg'


import './AdderBtn.scss'

const AdderBtn = () => {
    return (
        <div className="addBtn-wrapper">
            <div className="img-wrapper">
                <img src={Plus} alt="" className="addImg"/>
            </div>
            <button className="adderBtn">Добавить обьявления</button>
        </div>
    )
}


export default AdderBtn;