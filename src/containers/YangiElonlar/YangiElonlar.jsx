import Card from '../../components/Card'




import Phone from '../../assets/images/phone.jpg';
import RekUstun from '../../assets/images/rekUstun.jpg';
import Chelak from '../../assets/images/chelak.jpg';
import FruitVegetables from '../../assets/images/fruitsandvegetables.jpg';
import Instruments from '../../assets/images/instruments.jpg';
import Konki from '../../assets/images/konki.jpg';
import Mebel from '../../assets/images/mebel.jpg';
import Kfc from '../../assets/images/kfc.jpg';
import BolakMoshina from '../../assets/images/bolakMoshina.jpg';
import Motostikl from '../../assets/images/motostikl.jpg';
import AyolKassa from '../../assets/images/ayolKassa.jpg';
import Moshina from '../../assets/images/moshina.jpg';
//import Nabor from '../../assets/images/nabor.jpg';
//import Oshxona from '../../assets/images/oshxona.jpg';
import Svalka from '../../assets/images/svalka.jpg';
import Velosiped from '../../assets/images/velosiped.jpg';
import Velosiped3 from '../../assets/images/velosiped3.jpg';
import Velosiped2 from '../../assets/images/velosiped2.jpg';
//import XonaMebel from '../../assets/images/xonaMebel.jpg';
//import Yotoq from '../../assets/images/yotoq.jpg';




import './YangiElonlar.scss'




let yangiArr = [
    {
       CardImg: Phone,
       CardTitle: 'iPhone 6/6+ 16/64/128 Гб (Магазин 1 год гарантии)',
       CardTime: 'Вчера 22:55',
       CardPrice: '39 000 000 сум'
    },

    {
       CardImg: RekUstun,
       CardTitle: 'Маркетолог. Консультирование. Настройка рекламы',
       CardTime: 'Вчера 22:55',
       CardPrice: '39 000 000 сум'
    },

    {
       CardImg: AyolKassa,
       CardTitle: 'Требуется администратор в Отел',
       CardTime: 'Вчера 22:55',
       CardPrice: '39 000 000 сум'
    },

    {
       CardImg: Velosiped,
       CardTitle: 'Велосипед Merida Big Seven 70 D',
       CardTime: 'Вчера 22:55',
       CardPrice: '39 000 000 сум'
    },

    {
       CardImg: Velosiped2,
       CardTitle: 'Женский, комфортный велосипед из Германии',
       CardTime: 'Вчера 22:55',
       CardPrice: '39 000 000 сум'
    },

    {
       CardImg: Konki,
       CardTitle: 'Коньки раздвижные Galaxy р-р 36-39',
       CardTime: 'Вчера 22:55',
       CardPrice: '39 000 000 сум'
    },

    {
       CardImg: Velosiped3,
       CardTitle: 'Продам свою гоночный байк Mongoose',
       CardTime: 'Вчера 22:55',
       CardPrice: '39 000 000 сум'
    },


    {
       CardImg: Mebel,
       CardTitle: '1-к квартира, 47 м², 7/18 эт.',
       CardTime: 'Вчера 22:55',
       CardPrice: '39 000 000 сум'
    },


    {
       CardImg: Kfc,
       CardTitle: 'Торговое помещение, 10 м²',
       CardTime: 'Вчера 22:55',
       CardPrice: '39 000 000 сум'
    },


    {
       CardImg: Svalka,
       CardTitle: 'Двигатели моторы головки кпп турбины тнвд гарантия',
       CardTime: 'Вчера 22:55',
       CardPrice: '39 000 000 сум'
    },


    {
       CardImg: Moshina,
       CardTitle: 'Toyota Camry, 2002',
       CardTime: 'Вчера 22:55',
       CardPrice: '39 000 000 сум'
    },


    {
       CardImg: BolakMoshina,
       CardTitle: 'Сборочный комплект камаз 43118',
       CardTime: 'Вчера 22:55',
       CardPrice: '39 000 000 сум'
    },


    {
       CardImg: Motostikl,
       CardTitle: 'Продам легендарный BMW K1200S',
       CardTime: 'Вчера 22:55',
       CardPrice: '39 000 000 сум'
    },


    {
       CardImg: Chelak,
       CardTitle: 'Плиточник',
       CardTime: 'Вчера 22:55',
       CardPrice: '39 000 000 сум'
    },



    {
       CardImg: Instruments,
       CardTitle: 'Мастер регулировка дверей замена замков',
       CardTime: 'Вчера 22:55',
       CardPrice: '39 000 000 сум'
    },



    {
       CardImg: FruitVegetables,
       CardTitle: 'Овощная компания. Доставка свежих овощей и фруктов',
       CardTime: 'Вчера 22:55',
       CardPrice: '39 000 000 сум'
    },



]


const YangiElonlar = () => {
    return (



        <div className="container">

           

            
                <div className="YangiElonlar-wrapper">
                    {
                        yangiArr.map((item, index) => (
                            <Card
                                CardImg={item.CardImg}
                                CardTitle={item.CardTitle}
                                CardTime={item.CardTime}
                                CardPrice={item.CardPrice}


                            
                            />
                        ))
                    }
                </div>


        </div>
    )
}


export default YangiElonlar;