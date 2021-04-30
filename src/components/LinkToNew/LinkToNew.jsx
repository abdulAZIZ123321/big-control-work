import {NavLink} from 'react-router-dom'

import './LinkToNew.scss'

const LinkToNew = ({lTitle}) => {

     const openerFunc = (evt) => {
 
        const ToLink = document.querySelectorAll('.to-link')
        ToLink.forEach((item) => {
            item.classList.remove('active')
        })
        
      
        evt.currentTarget.classList.add('active')  
        
 
    }


    return (
      <div className="">
              <NavLink  to="" className="to-link to-link--first" onClick={openerFunc}>
                        {lTitle}
            </NavLink>
           
      </div>
    )
}


export default LinkToNew;