import img_bk1 from "./../../images/img_bk1.png";
import img_bk3 from "./../../images/img_bk3.png";
import scribble from "./../../images/scribble.png";
import "./style.css";

const IntroCatalog = () => {
    return ( 
    <section className="catalog__section1">
        <img className="ctlg__intro__img1" src={img_bk1} />
        <img className="intro__img2" src={img_bk3} />
        <img className="scrib__ctlg" src={scribble} />

        <div className="sect1__intro">
            <h1 className="intro__title">Каталог нашей(вашей) <font color="#2F4156">kniiga</font>
            </h1>
            <div className="intro__undertitle">
                <p>Читайте! Развивайтесь! Совершенствуйтесь!</p>
            </div>
        </div>
    </section> );
}
 
export default IntroCatalog;