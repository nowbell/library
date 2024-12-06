import img_bk1 from "./../../images/img_bk1.png";
import img_bk3 from "./../../images/img_bk3.png";
import "./style.css";

const IntroAbout = () => {
    return ( 
    <section className="home__section1">
        <img className="intro__img1" src={img_bk1} />
        <img className="intro__img2" src={img_bk3} />

        <div className="sect1__intro">
            <h1 className="intro__title">О нашей(вашей) <font color="#2F4156">kniiga</font>
            </h1>
            <div className="intro__undertitle">
                <p>Читайте! Развивайтесь! Совершенствуйтесь!</p>
            </div>
        </div>

        <div className="sect1__blocks">
            <div className="sect1__blcks__block">
                <div className="blck__info">
                    <p className="blck__info__num">
                        <font color="#2F4156">10</font>K
                    </p>
                    <p className="blck__info__txt">книг в библиотеке</p>
                </div>
            </div>
            <div className="sect1__blcks__block">
                <div className="blck__info">
                    <p className="blck__info__num">
                        <font color="#2F4156">15</font>K
                    </p>
                    <p className="blck__info__txt">пользователей</p>
                </div>
            </div>
            <div className="sect1__blcks__block">
                <div className="blck__info">
                    <p className="blck__info__num">
                        <font color="#2F4156">3</font>K
                    </p>
                    <p className="blck__info__txt">среднего онлайна в сутки</p>
                </div>
            </div>
        </div>
    </section> );
}
 
export default IntroAbout;