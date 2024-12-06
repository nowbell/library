import w from "../images/w.png";
import vector_202 from "../images/Vector 2.png";
import vector_203 from "../images/Vector 3.png";
import ellipse_1 from "../images/dostoev.png";
import Intro from "../components/intro/Intro";
import Nav from "../components/nav/Nav";
import Footer from "../components/footer/Footer";

const Home = () => {
    return ( 
        <>
            <Nav />

            <Intro />
            
            <div className="home__section2">
                <img className="w" src={w} />
                <div className="sect2__title">
                    <span>Бери. Читай. Совершенствуйся</span>
                </div>
                <div className="sect2__blocks">
                    <div className="sct2__blcks__blck">
                        <img src={vector_202} />
                        <p className="blck__txt">Вы устали прыгать по сайтам и искать нужный экземляр? Тогда вам к нам! Наша библиотека имеет огромную базу различной литературы, которая находится в открытом доступе</p>
                    </div>
                    <div className="sct2__blcks__blck">
                        <img src={vector_203} />
                        <p className="blck__txt">У вас нет времени на полное изучение содержания книги? Тогда вам к нам! Книги в нашей библиотеке содержать краткое содержание, яркую цитату, отзывы и рейтинг от пользователей</p>
                    </div>
                </div>
    
    
                <div className="sect2__quote">
                    <h1 className="sct2__qt__char">“</h1>
                    <h2 className="sct2__qt__txt">Перестать читать книги — значит перестать мыслить.</h2>
                    <div className="sct2__qt__author">
                        <div className="qt__author__platform">
                            <img className="author__pltfm__img" src={ellipse_1} />
                            <p className="author__pltfm__name">Федор Достоевский,</p>
                        </div>
                        <p className="qt__platform">русский писатель</p>
                    </div>
                </div>
            </div>

            <Footer />
        </> );
}
 
export default Home;