import React, {useEffect, useState} from 'react';
import Footer from "../components/footer/Footer";
import Nav from "../components/nav/Nav";
import IntroBook from "../components/intro_book/IntroBook";
import w from './../images/w.png';
import {useParams} from "react-router-dom";
import {fetchOneBook} from "../http/bookAPI";

const Book = () => {
    const [book, setBook] = useState({info: []});
    const {id} = useParams();

    useEffect(() => {
        fetchOneBook(id).then(data => setBook(data))
    }, []);

    return (
        <>
            <Nav/>

            <IntroBook />

            <div className="about__prod">
                <img className="prod__w" src={w}/>
                <img className="prod__img" src={process.env.REACT_APP_API_URL + book.img}/>
                <div className="about__prod__info">
                    <p className="prod__info__title">Краткое содержание</p>
                    <div className="prod__info__text">
                        <div className="info__txt">
                            <p>{book.summary}</p>
                        </div>
                    </div>
                </div>
                <div className="about__prod__line"></div>
                <div className="about__prod__quote">
                    <h1 className="prod__qt__char">“</h1>
                    <h2 className="prod__qt__txt">{book.quote}</h2>
                    <div className="prod__qt__author">
                        <div className="prod__qt__author__platform">
                            <img className="prod__author__pltfm__img" src={process.env.REACT_APP_API_URL + book.img_author}/>
                            <p className="prod__author__pltfm__name">{book.author},</p>
                        </div>
                        <p className="prod__qt__platform">"{book.name}"</p>
                    </div>
                </div>
            </div>

            <Footer/>
        </>
    );
};

export default Book;