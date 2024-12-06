import React, {useContext, useState} from 'react';
import logo_sign from '../images/logo_sign.png';
import {NavLink, useLocation, useNavigate} from "react-router-dom";
import {HOME_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE} from "../utils/consts";
import {login, registration} from "../http/userAPI";
import {observer} from "mobx-react-lite";
import {Context} from "../index";

const Auth = observer(() => {
    const {user} = useContext(Context);
    const location = useLocation();
    const navigate = useNavigate();
    const isLogin = location.pathname === LOGIN_ROUTE;
    const [surname, setSurname] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const click = async() => {
        try {
            let data;
            if (isLogin) {
                data = await login(email, password)
            } else {
                data = await registration(surname, name, email, password)
            }
            user.setUser(user)
            user.setIsAuth(true)
            navigate(HOME_ROUTE)
        } catch (e) {
            alert(e.response.data.message)
        }
    }

    return (
        <>
            <section className="sect__sign">
                <div className="sign__blocks">
                    <div className="sign__blocks__content">
                        <div className="sign__logo">
                            <img className="sign__logo__img" src={logo_sign}/>
                            <NavLink to={HOME_ROUTE} className="sign__logo__name">kniiga</NavLink>
                        </div>

                        <div className="signup__title">
                            <h2>{isLogin ? 'С возвращением!' : 'Начните прямо сейчас!'}</h2>
                        </div>

                        {isLogin ?
                            <div className="info__blocks">
                                <div className="email__blck">
                                    <p className="input__blck__title">Email</p>
                                    <input
                                        className="input__sign"
                                        value={email}
                                        onChange={e => setEmail(e.target.value)}
                                        placeholder="email"/>
                                </div>
                                <div className="password__blck">
                                    <p className="input__blck__title">Пароль</p>
                                    <input
                                        className="input__sign"
                                        value={password}
                                        onChange={e => setPassword(e.target.value)}
                                        placeholder="password"
                                        type="password"/>
                                </div>
                            </div>
                            :
                            <div className="info__blocks">
                                <div className="surname__blck">
                                    <p className="input__blck__title">Фамилия</p>
                                    <input
                                        className="input__sign"
                                        value={surname}
                                        onChange={e => setSurname(e.target.value)}
                                        placeholder="surname"/>
                                </div>
                                <div className="name__blck">
                                    <p className="input__blck__title">Имя</p>
                                    <input
                                        className="input__sign"
                                        value={name}
                                        onChange={e => setName(e.target.value)}
                                        placeholder="name"/>
                                </div>
                                <div className="email__blck">
                                    <p className="input__blck__title">Email</p>
                                    <input
                                        className="input__sign"
                                        value={email}
                                        onChange={e => setEmail(e.target.value)}
                                        placeholder="email"/>
                                </div>
                                <div className="password__blck">
                                    <p className="input__blck__title">Пароль</p>
                                    <input
                                        className="input__sign"
                                        value={password}
                                        onChange={e => setPassword(e.target.value)}
                                        placeholder="password"
                                        type="password"/>
                                </div>
                            </div>
                        }

                        {isLogin ?
                            <div className="signup__button">
                                <button onClick={click} className="signup__btn">Вход</button>
                            </div>
                            :
                            <div className="signup__button">
                                <button onClick={click} className="signup__btn">Регистрация</button>
                            </div>
                        }

                        {isLogin ?
                            <div className="signup__undertitle">
                                <p className="signup__undertitle__txt">Нет аккаунта?</p>
                                <NavLink to={REGISTRATION_ROUTE} className="signup__undertitle__link">Регистрируйтесь</NavLink>
                            </div>
                            :
                            <div className="signup__undertitle">
                                <p className="signup__undertitle__txt">Есть аккаунт?</p>
                                <NavLink to={LOGIN_ROUTE} className="signup__undertitle__link">Войти</NavLink>
                            </div>
                        }
                    </div>
                </div>
            </section>
        </>
    );
});

export default Auth;