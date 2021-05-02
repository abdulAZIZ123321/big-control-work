import FooterList from '../../Atom/FooterList'

import arrowPink from '../../assets/images/icons/arrowpink.svg'
import arrowBlue from '../../assets/images/icons/arrowBlue.svg'
import arrowGreen from '../../assets/images/icons/arrowGreen.svg'
import arrowHavorang from '../../assets/images/icons/arrowHavorang.svg'
import arrowOrange from '../../assets/images/icons/arrowOrange.svg'
import arrowBinafsha from '../../assets/images/icons/arrowBinafsha.svg'
import arrowYellow from '../../assets/images/icons/arrowYellow.svg'

import './FooterWrap.scss'



let FooterArr = [
    {
        FLUltext: 'Автомобили' ,
        FLLitext1: ' Легковые авто' ,
        FLLitext2: 'Мото' ,
        FLLitext3: 'Автобусы' ,
        FLLitext4: 'Грузовые авто' ,
        FLLitext5: 'Сельхозтехника' ,
        FLLitext6: 'Запчасти и Аксессуары' ,
        FLLitext7: ' Прицепы и Спецтехника' ,
        FLLitext8: ' Водный и Другой транспортa' ,
        FLLitext9: '' ,
        FLLitext10: '',
        FLLitext11: '',
        FTImg: arrowPink
    },
     {
        FLUltext: 'Недвижимость' ,
        FLLitext1: ' Аренда квартир Коммерческая недвижимость' ,
        FLLitext2: ' Аренда домов' ,
        FLLitext3: 'Аренда гаражей и Стоянок' ,
        FLLitext4: 'Продажа квартир' ,
        FLLitext5: 'Продажа домов' ,
        FLLitext6: 'Продажа земли' ,
        FLLitext7: 'Продажа гаражей/Стоянок' ,
        FLLitext8: 'Аренда помещений' ,
        FLLitext9: 'Продажа помещений' ,
        FLLitext10: ' Прочая недвижимость',
        FLLitext11: 'Обмен недвижимости',
         FTImg: arrowYellow
    },
     {
        FLUltext: 'Электроника' ,
        FLLitext1: ' Телефоны' ,
        FLLitext2: ' Компьютеры' ,
        FLLitext3: ' Ноутбуки, планшеты' ,
        FLLitext4: 'Оргтехника и расходники' ,
        FLLitext5: 'ТВ,Фото,Видео и Аудио' ,
        FLLitext6: ' Игры и Приставки' ,
        FLLitext7: 'Техника для дома и Для себя' ,
        FLLitext8: ' Климатическое оборудование' ,
        FLLitext9: ' Аксессуары и Комплектующие' ,
        FLLitext10: ' Техника для наблюдения',
        FLLitext11: 'Прочая электроника',
        FTImg: arrowPink
    },
     {
        FLUltext: 'Личные вещи' ,
        FLLitext1: ' Одежда, обувь, аксессуары' ,
        FLLitext2: ' Детская одежда и обувь' ,
        FLLitext3: ' Детские товары и Игрушки' ,
        FLLitext4: ' Школьникам' ,
        FLLitext5: 'Часы и украшения' ,
        FLLitext6: ' Товары для красоты и здоровья' ,
        FLLitext7: ' Разные вещи' ,
        FLLitext8: '' ,
        FLLitext9: '' ,
        FLLitext10: '',
        FLLitext11: '',
        FTImg: arrowOrange
    },
     {
        FLUltext: 'Дом и Сад' ,
        FLLitext1: ' Товары для интерьера' ,
        FLLitext2: 'Товары для сада' ,
        FLLitext3: 'Растения' ,
        FLLitext4: 'Продукты питания' ,
        FLLitext5: 'Посуда и Кухонная утварь' ,
        FLLitext6: 'Хоз.инвентарь и Бытовая химия' ,
        FLLitext7: ' Канцтовары и Расходные' ,
        FLLitext8: ' Прочие товары для дома' ,
        FLLitext9: '' ,
        FLLitext10: '',
        FLLitext11: '',
        FTImg: arrowGreen
    },
     {
        FLUltext: 'Товары стройки и ремонта' ,
        FLLitext1: ' Двери и окна' ,
        FLLitext2: ' Сантехника' ,
        FLLitext3: ' Стройматериалы' ,
        FLLitext4: ' Инструменты' ,
        FLLitext5: '' ,
        FLLitext6: '' ,
        FLLitext7: '' ,
        FLLitext8: '' ,
        FLLitext9: '' ,
        FLLitext10: '',
        FLLitext11: '',
        FTImg: arrowBinafsha
    },
     {
        FLUltext: 'Хобби, Отдых и Спорт' ,
        FLLitext1: ' Антиквариат и Коллекции' ,
        FLLitext2: 'Музыкальные инструменты' ,
        FLLitext3: ' Велосипеды' ,
        FLLitext4: ' Товары для спорта и отдыха' ,
        FLLitext5: ' Книги/Журналы' ,
        FLLitext6: ' CD/DVD/Пластинки/Кассеты' ,
        FLLitext7: ' Билеты и путешествия' ,
        FLLitext8: ' Охота и рыбалка' ,
        FLLitext9: '' ,
        FLLitext10: '',
        FLLitext11: '',
        FTImg: arrowHavorang
    },
     {
        FLUltext: ' Бизнес и услуги' ,
        FLLitext1: ' Сырьё и материалы' ,
        FLLitext2: ' Оборудование и аренда' ,
        FLLitext3: 'Производство и обработка' ,
        FLLitext4: ' Продажа бизнеса и партнерство' ,
        FLLitext5: ' Финансовые услуги/Бухгалтерия' ,
        FLLitext6: 'Услуги для красоты и здоровья' ,
        FLLitext7: ' Услуги курьера и доставки' ,
        FLLitext8: ' Реклама, Полиграфия и Маркетинг' ,
        FLLitext9: 'Няни, Сиделки и Домработницы' ,
        FLLitext10: ' Обучение, курсы и репетиторы',
        FLLitext11: ' Фото, видео, искусство и дизайн',
        FTImg: arrowBlue
    }
]

const FooterWrap = () => {
    return (
        
        <div className="container">

                    <div className="FooterWrap">
                        {
                            FooterArr.map((item) => (
                                <FooterList
                                
                                FLUltext={item.FLUltext}
                                FLLitext1={item.FLLitext1}
                                FLLitext2={item.FLLitext2}
                                FLLitext3={item.FLLitext3}
                                FLLitext4={item.FLLitext4}
                                FLLitext5={item.FLLitext5}
                                FLLitext6={item.FLLitext6}
                                FLLitext7={item.FLLitext7}
                                FLLitext8={item.FLLitext8}
                                FLLitext9={item.FLLitext9}
                                FLLitext10={item.FLLitext10}
                                FLLitext11={item.FLLitext11}
                                FTImg={item.FTImg}

                                
                                
                                
                                />
                            ))
                        }
                </div>
        </div>
  
       
    )
}


export default FooterWrap;