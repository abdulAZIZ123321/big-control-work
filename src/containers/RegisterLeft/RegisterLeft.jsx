import { useRef } from 'react';

import {Link} from 'react-router-dom'

import request from '../../services/http'

import RLItems from '../../components/RLItems'

import toBack from '../../assets/images/icons/toBack.svg'

import  './RegisterLeft.scss'



const RegisterLeft = () => {
    const nameInput = useRef(null);

    const firstSubmit = (e) => {
        e.preventDefault();
        request.post('/register', {
            email: nameInput.current.value,
            password: "pistol"

        })
        .then((response) => {
            window.localStorage.setItem('firstToken', response.data.token)
        })
        .catch((err) => {
            console.log(err)
            alert('Something been wrong')
        })

        const firstFormik = document.querySelector('.firstFormik')

        firstFormik.style.display = 'none';

        const SecondFormik = document.querySelector('.SecondFormik')

        SecondFormik.style.display = 'block';

    };

    const returnBack = (e) => {

         e.preventDefault();
        request.post('/register', {
            email: nameInput.current.value,
            password: "pistol"

        })
        .then((response) => {
            window.localStorage.setItem('firstToken', response.data.token)
        })
        .catch((err) => {
            console.log(err)
            alert('Something been wrong')
        })

         const firstFormik = document.querySelector('.firstFormik')

        firstFormik.style.display = 'block';


        const SecondFormik = document.querySelector('.SecondFormik')

        SecondFormik.style.display = 'none';

       

     

    }
    



    return (
    
       
                        <div className="RegisterLeft">
                            
                            <RLItems>           
                                    <div className="firstFormik">
                                  <div className="title-wrap">
                                            <h2 className="RLItems-title">
                                             ???????????????????? ??????????????????????
                                     </h2>
                                  </div>

                                    <div className="firstFWrap">
                                        <form action="" onSubmit={firstSubmit} className="rFirstInput">
                                        <input type="text" ref={nameInput} className="RInputName"/>
                                        <button className="RLBtn">??????????</button>

                                    </form>
                                    </div>

                                        <div className="RLItems-bottom">
                                                <div className="nutshell">
                                                    <hr className="left"/><span className="RLItems-span">??????</span><hr className="right"/>
                                                </div>

                                               <div className="nutshellthiswrap">
                                                    <Link to="/" className="RLItems-link">
                                                    ?????????????? ?? ??????????????, ???????? ?? ?????? ?????? ???????? ?????????????? kivi.uz
                                                </Link>
                                               </div>
                                        </div>

                                    </div>

                            </RLItems>

                             
                             
                             
                            <RLItems>

                               <div className="SecondFormik">
                                    <h2 className="RLItems-title">
                                             ???????????????????? ??????????????????????
                                     </h2>

                                    <form action="" onSubmit={firstSubmit} className="">
                                        <div className="second-block1">
                                            <label htmlFor="secondInput" className="labelR labelR--first">?????????????? ?????? email</label>
                                        <input type="email" id="secondInput" ref={nameInput} className="RInputName2"/>
                                        </div>

                                        <div className="">
                                            <label htmlFor="secondInput" className="labelR">?????????????? ?????? ?????????? ????????????????</label>
                                        <div className="rNumbers">
                                            <input type="number"  id="secondInput" className="RInputName2 RInputName2--paddingly"/>
                                        <input type="number" id="secondInput"  className="RInputName2"/>
                                        </div>
                                        </div>

                                        <p className="Regtext">
                                            <a href="" className="RegLink">
                                                ?????????????? ???? ???????????? ?????????????????? ??????????????, ?? ?????? ???????????????? ???? ?????????????????? ???????????????????????? ???????????? ?? ???????????????????? c ??????????????????
                                            </a>
                                             ????????????????-???????????? ?? ?????????????????? ????????????????????????????????????
                                            
                                        </p>

                                       <div className="RSbtns">
                                            <button className="SecondBtn" onClick={returnBack}>
                                            <img src={toBack} alt=""/>
                                        </button>
                                        <button className="RLBtn RLBtn--paddingly">???????????????? ????????????</button>
                                       </div>

                                      

                                    </form>

                                     <div className="RLItems-bottom">
                                                 <div className="nutshell">
                                                    <hr className="left"/><span className="RLItems-span">??????</span><hr className="right"/>
                                                </div>

                                                <div className="nutshellthiswrap">
                                                    <Link to="/" className="RLItems-link">
                                                    ?????????????? ?? ??????????????, ???????? ?? ?????? ?????? ???????? ?????????????? kivi.uz
                                                </Link>
                                               </div>
                                        </div>

                               </div>

                            </RLItems>



                    </div>

     
    )
}

export default RegisterLeft;