import './SRItems2.scss'



const SRItems2 = ({Items2="70 000 у.е.", Item2Link="Ташкент, Ташкентская область, Юнусабадский район "}) => {
    return (
  
       <div className="SRItems2">
              <h4 className="SRITEMS2">{Items2}</h4>
            <a href="#" className="SRITEMS2-link">{Item2Link}</a>
       </div>
    )
}


export default SRItems2;