import img_bk1 from "./../../images/img_bk1.png";
import img_bk3 from "./../../images/img_bk3.png";
import scribble from "./../../images/scribble.png";
import "./style.css";
import {NavLink} from "react-router-dom";
import {CATALOG_ROUTE} from "../../utils/consts";

const Intro = () => {
    return ( 
    <section className="home__section1">
        <img className="intro__img1" src={img_bk1} />
        <img className="intro__img2" src={img_bk3} />
        <img className="scrib" src={scribble} />
        

        <div className="sect1__intro">
            <h1 className="intro__title">kniiga - путь к <font color="#2F4156">совершенству</font>
            </h1>
            <div className="intro__undertitle">
                <p>Читайте! Развивайтесь! Совершенствуйтесь!</p>
            </div>
            <div className="intro__button">
                <NavLink to={CATALOG_ROUTE} className="intro__btn">ПЕРЕЙТИ В КАТАЛОГ</NavLink>
            </div>
        </div>
    </section> );
}
 
export default Intro;