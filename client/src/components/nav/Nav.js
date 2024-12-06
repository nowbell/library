import logo from "./../../images/logo.png";
import "./style.css";
import {useContext} from "react";
import {Context} from "../../index";
import {NavLink, useNavigate} from "react-router-dom";
import {ABOUT_ROUTE, ADMIN_ROUTE, CATALOG_ROUTE, HOME_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE} from "../../utils/consts";
import {observer} from "mobx-react-lite";

const Nav = observer (() => {
    const {user} = useContext(Context)
    const navigate = useNavigate();

    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
    }

    return (  
        <header className="home__head">
            <div className="nav">
                <nav className="head__bar">
                    <img className="logo__img" src={logo}/>
                    <div className="header__links">
                        <NavLink to={HOME_ROUTE} className={"header__link"}>Главная</NavLink>
                        <NavLink to={ABOUT_ROUTE} className={"header__link"}>О нас</NavLink>
                        <NavLink to={CATALOG_ROUTE} className={"header__link"}>Каталог</NavLink>
                    </div>
                </nav>
                {user.isAuth ?
                    <div className="head__buttons">
                        <NavLink to={ADMIN_ROUTE} className={({ isActive }) => (isActive ? 'hd__btn' : 'hd__btn')}>АДМИН ПАНЕЛЬ</NavLink>
                        <NavLink onClick={() => logOut()} className={({ isActive }) => (isActive ? 'hd__btn' : 'hd__btn')}>ВЫХОД</NavLink>
                    </div>
                    :
                    <div className="head__buttons">
                        <NavLink to={REGISTRATION_ROUTE} className={"hd__btn"}>РЕГИСТРАЦИЯ</NavLink>
                        <NavLink to={LOGIN_ROUTE} className={({ isActive }) => (isActive ? 'hd__btn' : 'hd__btn')}>ВХОД</NavLink>
                    </div>
                }
            </div>
        </header>);
});

export default Nav;