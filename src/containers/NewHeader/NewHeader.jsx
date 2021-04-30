import NewHeaderTop from '../../components/NewHeaderTop'

import NewHeaderBottom from '../../components/NewHeaderBottom'

import './NewHeader.scss'

const NewHeader = () => {
    return (
        <div className="NewHeader-wrapper">
           <NewHeaderTop/>

           <NewHeaderBottom/>
        </div>
    )
}


export default NewHeader;