import IntroAbout from "../components/intro_about/IntroAbout";
import about_image from "../images/about.jpg";
import Nav from "../components/nav/Nav";
import Footer from "../components/footer/Footer";

const About = () => {
    return (
    <>
        <Nav />

        <IntroAbout />

        <section className="about__section2">
            <div className="about__title">
                <span>Немножко о нас</span>
            </div>
            <div className="about__under__title">
                <p>Как и любой проект, мы создаем историю.</p>
            </div>
            <div className="about__image">
                <img className="about__img" src={about_image} />
            </div>
            <div className="about__info">
                <div className="about__info__text">
                    <p>«Kniiga» — популярный литературный портал. В нашей электронной библиотеке можно как <font color="black"><b>читать</b></font> книги онлайн, так и <font color="black"><b>скачать</b></font> книги бесплатно, а также <font color="black"><b>купить</b></font> книги популярных жанров.<br /><br />Вам интересны фанфики? Юмор? Различные жанры произведений? — Вы можете читать на нашей литературной платформе онлайн, а можете и бесплатно скачать книги. Кроме того у наших читателей есть возможность купить электронные книги. Наша бесплатная
                    </p>
                </div>
                <div className="about__info__text">
                    <p> библиотека электронных книг непрерывно пополняется новыми произведениями от популярных авторов и молодых талантов. Подростковая проза соседствует с любовными романами, а вместе с книгами о попаданцах вы увидите фантастику, современную прозу и боевик.<br /><br />Больше информации. <b><a className="txt__link" href="about.html">Перейти</a></b></p>
                </div>
            </div>
        </section>

        <Footer />
    </>);
}
 
export default About;   