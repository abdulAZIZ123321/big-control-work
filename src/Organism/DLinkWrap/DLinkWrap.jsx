import DeepestLink from '../../Atom/DeepestLink'

import './DLinkWrap.scss'

const DLinkWrap = ({DLink}) => {
    return (
  
     <div className="container">
         <hr className="deep"/>
          <div className="DLinkWrap">
         
          <DeepestLink DLink="Подать объявление"/>
          <DeepestLink DLink="Объявления"/>
          <DeepestLink DLink=" Магазины "/>
          <DeepestLink DLink="Помощь"/>
          <DeepestLink DLink="Безопасность"/>
          <DeepestLink DLink="Реклама на сайте"/>  
            <DeepestLink DLink="  О компании"/>  
      </div>
     </div>

       
    )
}


export default DLinkWrap;