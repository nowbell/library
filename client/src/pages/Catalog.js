import IntroCatalog from "../components/intro_catalog/IntroCatalog";
import w2 from "../images/w2.png";
import Nav from "../components/nav/Nav";
import Footer from "../components/footer/Footer";
import GenreBar from "../components/genreBar/GenreBar";
import BookBar from "../components/book/BookBar";
import {observer} from "mobx-react-lite";
import {useContext, useEffect} from "react";
import {Context} from "../index";
import {fetchBooks, fetchGenres} from "../http/bookAPI";

const Catalog = observer(() => {
    const {book} = useContext(Context);

    useEffect(() => {
        fetchGenres().then(data => book.setGenres(data));
        fetchBooks().then(data => book.setBooks(data.rows));
    }, []);

    return ( 
        <>

            <Nav />

            <IntroCatalog />

            <section className="catalog__section2">
                <img className="w2" src={w2} />
                <div className="catalog__title">
                    <span>Последние книги</span>
                </div>

                <GenreBar />

                <BookBar />

            </section>

            <Footer />

        </> );
});
 
export default Catalog;