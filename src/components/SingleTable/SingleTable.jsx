import './SingleTable.scss'

const SingleTable = () => {
    return (
      <div className="SingleTable-wrap">

          <div className="SingleTable">
          <div className="table-row">
              <div className="table-block">
                  <p className="table-title">Количество комнат:</p>
                  <p className="table-title">6</p>
              </div>
                            <div className="table-block">
                  <p className="table-title">Общая площадь:</p>
                  <p className="table-title">40 м2</p>
              </div>
                            <div className="table-block">
                  <p className="table-title">Этаж:</p>
                  <p className="table-title">32</p>
              </div>
          </div>
          <div className="table-row">
              <div className="table-block">
                  <p className="table-title">Этажность дома:</p>
                  <p className="table-title">6</p>
              </div>
                            <div className="table-block">
                  <p className="table-title">Состояние квартиры:</p>
                  <p className="table-title">Первая сдача </p>
              </div>
                            <div className="table-block">
                  <p className="table-title">Этаж:</p>
                  <p className="table-title">32</p>
              </div>
          </div>
          <div className="table-row">
              <div className="table-block">
                  <p className="table-title">Планировка</p>
                  <a href="" className="table-link">Раздельная</a>
              </div>
                            <div className="table-block">
                  <p className="table-title">Год постройки/сдачи</p>
                  <a href="" className="table-link">Сдача в 2017</a>
              </div>
                            <div className="table-block">
                  <p className="table-title">Ремонт</p>
                  <p className="table-title">Авторский проект</p>
              </div>
          </div>

          <div className="table-row">
              <div className="table-block">
                  <p className="table-title">Санузел</p>
                  <a href="" className="table-link">2 санузла и более</a>
              </div>
                            <div className="table-block">
                  <p className="table-title">Меблирована</p>
                  <a href="" className="table-link">Да</a>
              </div>
                            <div className="table-block">
                  <p className="table-title">Высота потолков</p>
                  <p className="table-title">32</p>
              </div>
          </div>
      </div>


        <div className="ST-bottom-block">
            <h6 className="table-title">Рядом есть</h6>
            <a href="" className="table-link table-link--longer">Больница, поликлиника, Детская, площадка, Детский сад, Остановки, Парк, зелёная зона, Развлекательные заведения, Рестораны, кафе	</a>
        </div>

        <div className="ST-bottom-text">
            <p className="table-text">
                Срочно продаётся 3х ком на 1 этоже 7 этажном кирпичном доме. Новостройка Голден Хаус жылой комплекс Етти Чинор Очень качественный и дорогой ремонт. Комнаты полнастю разделные болшые. 2 сан узла. Для лишних вещей есть кладовка.Ремонт шыкарный обсалютно новый. 

            </p>
            <p className="table-text">
                Ремонт делолся из очень дорогова материяла. Дорогая класическая кухонная мебель. Джаккузи,Тёплые полы в каждой комнате. Дорогие люстры вовсех комнатах решодки на окнах. Теретория охранается. Всё предусмотренно для детей деские площядки качели итд. Торг наместе. Торопитесь продаю нужны денги. Первый золотой этаж и паследний в этом коплексе. Торопитесь.
            </p>
        </div>

      </div>
    )
}


export default SingleTable;