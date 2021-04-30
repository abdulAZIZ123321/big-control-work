import AdderBtn from '../../components/MainlySelItems/AdderBtn';
import SearcherPart from '../../components/MainlySelItems/SearcherPart'



import './MainlySel.scss'

const MainlySel = () => {
    return (
        <div className="container">
            <div className="MS-wrapper">
                <SearcherPart/>
                <AdderBtn/>
            </div>
        </div>
    )
}


export default MainlySel;