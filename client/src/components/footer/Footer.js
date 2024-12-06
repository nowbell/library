import logo from "./../../images/logo.png";
import vk from "./../../images/vk.png";
import whats from "./../../images/whats.png";
import tg from "./../../images/tg.png";
import "./style.css";
import {NavLink} from "react-router-dom";
import {ABOUT_ROUTE, CATALOG_ROUTE, HOME_ROUTE} from "../../utils/consts";

const Footer = () => {
    return ( 
    <section className="footer">
        <div className="footer__content">
            <div className="ftr__elems">
                <div className="ftr__info">
                    <div className="footer__logo">
                        <img className="ftr__lg__img" src={logo} />
                        <p className="ftr__lg__info">kniiga ©2024.</p>
                    </div>
                    <p className="footer__text">Сайт предоставлен исключительно для равлекательных целей</p>
                    <div className="footer__social">
                        <a href="https://vk.com/old.mennn"><img src={vk} /></a>
                        <a href="https://wa.me/79281891326"><img src={whats} /></a>
                        <a href="https://t.me/a_k_lv"><img src={tg} /></a>
                    </div>
                </div>

                <div className="footer__menu">
                    <NavLink className={({ isActive }) => (isActive ? 'ftr__menu__link' : 'ftr__menu__link')} to={HOME_ROUTE}>Главная</NavLink>
                    <NavLink className={({ isActive }) => (isActive ? 'ftr__menu__link' : 'ftr__menu__link')} to={ABOUT_ROUTE}>О нас</NavLink>
                    <NavLink className={({ isActive }) => (isActive ? 'ftr__menu__link' : 'ftr__menu__link')} to={CATALOG_ROUTE}>Каталог</NavLink>
                </div>

                <div className="footer__contacts">
                    <p>Телефон: + 7 (952) 123 12 24</p>
                    <p>e-mail: kniiga@mail.com</p>
                </div>
            </div>
            <div className="footer__footnote">
                <div className="ftr__ftnt__line"></div>
                <div className="ftr__ftnt__info">
                    <a className="ftnt__info__txt">©2024. All Rights Reserved. kniiga</a>
                    <div className="ftnt__info__links">
                        <a className="ftnt__info__link">Terms</a>
                        <a className="ftnt__info__char">•</a>
                        <a className="ftnt__info__link">Privacy</a>
                    </div>
                </div>
            </div>
        </div>
    </section> );
}
 
export default Footer;