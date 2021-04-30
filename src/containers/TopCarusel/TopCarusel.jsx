//import {useState, useEffect} from 'react';




import TCCard from '../../components/TCCard'

import arrowLeft from '../../components/TCCArrowLeft';

import arrowRight from '../../components/TCCArrowRight';

import AirPlane from '../../assets/images/icons/Airplane.svg';
import Gifts from '../../assets/images/icons/Gifts.svg';
import Man from '../../assets/images/icons/Man.svg';
import Mark from '../../assets/images/icons/mark.svg';
import Market from '../../assets/images/icons/market.svg';
import Bag from '../../assets/images/icons/bag.svg';
import Computer from '../../assets/images/icons/computer.svg';
import Mountain from '../../assets/images/icons/mountain.svg';
import Gaming from '../../assets/images/icons/Gaming.svg';




import './TopCarusel.scss'

let CImgArr = [ AirPlane, Gifts, Man, Mark, Market, Bag, Computer, Mountain, Gaming,  AirPlane, Gifts, Man, Mark, Market, Computer,    ]

const TopCarusel = () => {

    //const [ pushState, setPushState ] = useState()


    // const pushsherFunc1 = () => {
    //     const card = document.querySelectorAll('.TCCard-wrapper');

    //     card.forEach((card) => {
    //         card.style.transform = "translateX(50px)"
    //     })


    // }

    const pushsherFunc2 = () => {
        const card = document.querySelectorAll('.TCCard-wrapper');

        card.forEach((card) => {
            card.style.transform = "translateX(-50px)"
        })


    }
    


    return (
        <div>



            
       
            <div className="container">
                 <arrowLeft/>
                            <div className="TopCarusel-wrapper">
                                                {
                                                    CImgArr.map((item) => (
                                                        <TCCard
                                                        
                                                        CImg={item}
                                                        
                                                        />
                                                    ))
                                                }
                            </div>
                    <arrowRight/>       
            </div>
                                         



        </div>
    )
}


export default TopCarusel;