import './FooterList.scss'

const FooterList = ({FLUltext, FLLitext1, FLLitext2, FLLitext3, FLLitext4, FLLitext5, FLLitext6, FLLitext7, FLLitext8, FLLitext9, FLLitext10, FLLitext11  }) => {
    

    return (
        

     <ul className="Flist">
         {FLUltext}


        <a href="">
            <li className="FLItems">{FLLitext1}</li>
        </a>
        <a href="">
            <li className="FLItems">{FLLitext2}</li>
        </a>
        <a href="">
            <li className="FLItems">{FLLitext3}</li>
        </a>
        <a href="">
            <li className="FLItems">{FLLitext4}</li>
        </a>
       <a href="">
            <li className="FLItems">{FLLitext5}</li>
       </a>
        <a href="">
            <li className="FLItems">{FLLitext6}</li>
        </a>
        <a href="">
            <li className="FLItems">{FLLitext7}</li>
        </a>
        <a href="">
            <li className="FLItems">{FLLitext8}</li>
        </a>
       <a href="">
            <li className="FLItems">{FLLitext9}</li>
       </a>
            <a href="">
                <li className="FLItems">{FLLitext10}</li>
            </a>
        <a href="">
            <li className="FLItems">{FLLitext11}</li>
        </a>
     </ul>

       
    )
}


export default FooterList;