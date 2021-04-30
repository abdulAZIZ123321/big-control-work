import './SettingsItem.scss'

const SettingsItem = () => {
    return (
        <div className="SettingsItem">
          <div className="SettingsItem-sections">
              <label htmlFor="SettingInputT" className="SettingLabel">Цена</label>
              <div className="SInputsWrap">
                <input type="text" className="SettingInputT" id="SettingInputT"/>

              <select name="" id="" className="SettingSelect">
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
              </select>

              <div className="SInputsWrap">
                <input type="checkbox" name="" id="SettingCH"/>

              <label htmlFor="SettingCH" className="SettingLabel2 SettingLabel2--bigger">Договорная</label>
              </div>
              </div>
          </div>


          <div className="SettingsItem-sections">
              <label htmlFor="SettingInputT" className="SettingLabel">Количество комнат*</label>
              <div className="SInputsWrap">
                <input type="number" className="SettingInputT" id="SettingInputT"/>

               <input type="number" className="SettingInputT" id="SettingInputT"/>

               <input type="number" className="SettingInputT" id="SettingInputT"/>
              </div>

              
          </div>


          <div className="SettingsItem-sections SettingsItem-sections--notFlexly">
            <label htmlFor="SettingInputT" className="SettingLabel">Расположение*</label>
              <div className="sections-inner">
                <div className="SettingsItem-articles">
                  <div className="SInputsWrap">
                    <input type="checkbox" name="" id="SettingCH1"/>
                    <label htmlFor="SettingCH1" className="SettingLabel2">В городе</label>
                  </div>

                  <div className="SInputsWrap">
                    <input type="checkbox" name="" id="SettingCH2"/>
                    <label htmlFor="SettingCH2" className="SettingLabel2">В пригороде</label>
                  </div>

                  <div className="SInputsWrap">
                    <input type="checkbox" name="" id="SettingCH3"/>
                    <label htmlFor="SettingCH3" className="SettingLabel2">В сельской местности</label>
                  </div>
              </div>
              <div className="SettingsItem-articles">
                  <div className="SInputsWrap">
                    <input type="checkbox" name="" id="SettingCH4"/>
                    <label htmlFor="SettingCH4" className="SettingLabel2">Вдоль трассы</label>
                  </div>

                  <div className="SInputsWrap">
                    <input type="checkbox" name="" id="SettingCH5"/>
                    <label htmlFor="SettingCH5" className="SettingLabel2">Возле водоема, реки</label>
                  </div>

                  <div className="SInputsWrap">
                    <input type="checkbox" name="" id="SettingCH6"/>
                    <label htmlFor="SettingCH6" className="SettingLabel2">В предгорьях</label>
                  </div>
              </div>
              <div className="SettingsItem-articles">
                    <div className="SInputsWrap">
                    <input type="checkbox" name="" id="SettingCH7"/>
                    <label htmlFor="SettingCH7" className="SettingLabel2">В дачном массиве</label>
                  </div>

                  <div className="SInputsWrap">
                    <input type="checkbox" name="" id="SettingCH8"/>
                    <label htmlFor="SettingCH8" className="SettingLabel2">На закрытой территории</label>
                  </div>
              </div>
              </div>
          </div>


          <div className="SettingsItem-sections">
                    <div className="SInputsWrap2">
                      <label htmlFor="SettingInputN1" className="SettingLabel">Этажность дома*</label>
                      <input type="number" className="SettingInputT" id="SettingInputN1"/>
                    </div>

                    <div className="SInputsWrap2">
                      <label htmlFor="SettingInputN2" className="SettingLabel">Высота потолков</label>
                      <input type="number" className="SettingInputT" id="SettingInputN2"/>
                    </div>

                    <div className="SInputsWrap2">
                      <label htmlFor="SettingInputN3" className="SettingLabel">Площадь участка*</label>
                      <input type="number" className="SettingInputT" id="SettingInputN3"/>
                    </div>

               
          </div>


          <div className="SettingsItem-sections SettingsItem-sections--notFlexly">
            <label htmlFor="SettingInputT" className="SettingLabel">Состояние дома*</label>
             <div className="sections-inner">
               
              <div className="SettingsItem-articles">
                  <div className="SInputsWrap">
                    <input type="checkbox" name="" id="SettingCH9"/>
                    <label htmlFor="SettingCH9" className="SettingLabel2">Авторский проект</label>
                  </div>

                  <div className="SInputsWrap">
                    <input type="checkbox" name="" id="SettingCH10"/>
                    <label htmlFor="SettingCH10" className="SettingLabel2">Средний ремонт</label>
                  </div>

                  <div className="SInputsWrap">
                    <input type="checkbox" name="" id="SettingCH11"/>
                    <label htmlFor="SettingCH11" className="SettingLabel2">Евроремонт</label>
                  </div>
              </div>
              <div className="SettingsItem-articles">
                  <div className="SInputsWrap">
                    <input type="checkbox" name="" id="SettingCH12"/>
                    <label htmlFor="SettingCH12" className="SettingLabel2">Требует ремонта</label>
                  </div>

                  <div className="SInputsWrap">
                    <input type="checkbox" name="" id="SettingCH13"/>
                    <label htmlFor="SettingCH13" className="SettingLabel2">Предчистовая отделка</label>
                  </div>

                  <div className="SInputsWrap">
                    <input type="checkbox" name="" id="SettingCH14"/>
                    <label htmlFor="SettingCH14" className="SettingLabel2">Не достроен</label>
                  </div>
              </div>
              <div className="SettingsItem-articles">
                    <div className="SInputsWrap">
                    <input type="checkbox" name="" id="SettingCH15"/>
                    <label htmlFor="SettingCH15" className="SettingLabel2">Черновая отделка</label>
                  </div>

                  <div className="SInputsWrap">
                    <input type="checkbox" name="" id="SettingCH16"/>
                    <label htmlFor="SettingCH16" className="SettingLabel2">Под снос</label>
                  </div>
              </div>
          </div>


          <div className="SettingsItem-sections">
              <div className="SettingsItem-articles2">
                  <label htmlFor="SettingSelect2" className="SettingLabel">Тип дома</label>
                  <select name="" id="SettingSelect2" className="SettingSelect"></select>
              </div>
              <div className="SettingsItem-articles2">
                    <label htmlFor="SettingSelect3" className="SettingLabel">Электричество</label>
                  <select name="" id="SettingSelect3" className="SettingSelect"></select>
              </div>
             </div>
          </div>


          <div className="SettingsItem-sections SettingsItem-sections--notFlexly">
            <label htmlFor="SettingInputT" className="SettingLabel">Отопление</label>
               <div className="sections-inner">
                 <div className="SettingsItem-articles">
                  <div className="SInputsWrap">
                    <input type="checkbox" name="" id="SettingCH9"/>
                    <label htmlFor="SettingCH9" className="SettingLabel2">Центральное</label>
                  </div>

                  <div className="SInputsWrap">
                    <input type="checkbox" name="" id="SettingCH10"/>
                    <label htmlFor="SettingCH10" className="SettingLabel2">На газе</label>
                  </div>

                  <div className="SInputsWrap">
                    <input type="checkbox" name="" id="SettingCH11"/>
                    <label htmlFor="SettingCH11" className="SettingLabel2">На твердом топливе</label>
                  </div>
              </div>
              <div className="SettingsItem-articles">
                  <div className="SInputsWrap">
                    <input type="checkbox" name="" id="SettingCH12"/>
                    <label htmlFor="SettingCH12" className="SettingLabel2">На жидком топлив</label>
                  </div>

                  <div className="SInputsWrap">
                    <input type="checkbox" name="" id="SettingCH13"/>
                    <label htmlFor="SettingCH13" className="SettingLabel2">Электрическое</label>
                  </div>

                  <div className="SInputsWrap">
                    <input type="checkbox" name="" id="SettingCH14"/>
                    <label htmlFor="SettingCH14" className="SettingLabel2">Смешанное</label>
                  </div>
              </div>
              <div className="SettingsItem-articles">
                    <div className="SInputsWrap">
                    <input type="checkbox" name="" id="SettingCH15"/>
                    <label htmlFor="SettingCH15" className="SettingLabel2">Без отопления</label>
                  </div>

                  
              </div>
               </div>
          </div>


          <div className="SettingsItem-sections">
              <label htmlFor="" className="SettingLabel">Электричество</label>
              <h4 className="SettingTitle">
                  Есть возможность подключения
              </h4>
          </div>
          <div className="SettingsItem-sections">
                <hr/>
                <span className="SettingSpan">
                    9000 знаков осталос
                </span>

                <div className="IMGIcons">
                  <label htmlFor="inputFile" className="SettingLabel">
                    <img src="" alt="" className="SettingIcon"/>

                    <input type="file" name="" id="inputFile"/>

                </label>
                <label htmlFor="inputFile2" className="SettingLabel">
                    <img src="" alt="" className="SettingIcon"/>

                    <input type="file" name="" id="inputFile2"/>

                </label>
                <label htmlFor="inputFile3" className="SettingLabel">
                    <img src="" alt="" className="SettingIcon"/>

                    <input type="file" name="" id="inputFile3"/>

                </label>
                <label htmlFor="inputFile4" className="SettingLabel">
                    <img src="" alt="" className="SettingIcon"/>

                    <input type="file" name="" id="inputFile4"/>

                </label>
                <label htmlFor="inputFile5" className="SettingLabel">
                    <img src="" alt="" className="SettingIcon"/>

                    <input type="file" name="" id="inputFile5"/>

                </label>
                </div>
                <div className="IMGIcons">
                  <label htmlFor="inputFile6" className="SettingLabel">
                    <img src="" alt="" className="SettingIcon"/>

                    <input type="file" name="" id="inputFile6"/>

                </label>
                <label htmlFor="inputFile7" className="SettingLabel">
                    <img src="" alt="" className="SettingIcon"/>

                    <input type="file" name="" id="inputFile7"/>

                </label>
                <label htmlFor="inputFile8" className="SettingLabel">
                    <img src="" alt="" className="SettingIcon"/>

                    <input type="file" name="" id="inputFile8"/>

                </label>
                <label htmlFor="inputFile9" className="SettingLabel">
                    <img src="" alt="" className="SettingIcon"/>

                    <input type="file" name="" id="inputFile9"/>

                </label>
                <label htmlFor="inputFile10" className="SettingLabel">
                    <img src="" alt="" className="SettingIcon"/>

                    <input type="file" name="" id="inputFile10"/>

                </label>
                </div>
          </div>


          <div className="SettingsItem-sections">
                  <h2 className="SettingTitleBig">
                      Местоположение объекта

                  </h2>

                  <div className="SettingsItem-articles2">
                      <label htmlFor="SettingSelect3" className="SettingLabel">Регион</label>
                      <select name="" id="SettingSelect3" className="SettingSelect"></select>
                  </div>
                  <div className="SettingsItem-articles2">
                        <label htmlFor="SettingSelect4" className="SettingLabel">Город / Район</label>
                      <select name="" id="SettingSelect4" className="SettingSelect"></select>
                  </div>

                  <img src="" alt="" className="bigImg"/>


          </div>


          <div className="SettingsItem-sections SettingsItem-sections--notFlexly ">
                <div className="SInputsWrap2">
                      <label htmlFor="SettingInputN4" className="SettingLabel">Телефонный номер</label>
                      <input type="number" className="SettingInputT" id="SettingInputN4"/>
                    </div>

                    <div className="SInputsWrap2">
                      <label htmlFor="SettingInputN5" className="SettingLabel">Email-адрес</label>
                      <input type="number" className="SettingInputT" id="SettingInputN5"/>
                    </div>

                    <div className="SInputsWrap2">
                      <label htmlFor="SettingInputT5" className="SettingLabel">Контактный лицо</label>
                      <input type="text" className="SettingInputT" id="SettingInputT5"/>
                    </div>
          </div>


          <div className="SettingsItem-sections">
                 <button className="SettingGreenBtn">
                      Добавить обьявления бесплатно
                 </button>

                 <button className="SettingBlueBtn">
                          Предпросмотр
                 </button>
          </div>
        </div>
    )
}


export default SettingsItem;