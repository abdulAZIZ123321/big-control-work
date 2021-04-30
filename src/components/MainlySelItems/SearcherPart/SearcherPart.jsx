import './SearcherPart.scss'

const SearcherPart = () => {
    return (
        <div className="sPart-wrapper">
           <form action="" className="sPart-form">
                <select name="" id="" className="sPart-select1">
                    <option value="" selected>Любая категория</option>
                    <option value=""></option>
                    <option value=""></option>
                    <option value=""></option>
                </select>
                <input type="search" name="" id="" className="sPart-searcher"/>
                <select name="" id="" className="sPart-select2">
                    <option value="" selected>По всей Узбекистану</option>
                    <option value=""></option>
                    <option value=""></option>
                    <option value=""></option>
                </select>
                <button className="sPart-button">Найти</button>
           </form>
        </div>
    )
}


export default SearcherPart;