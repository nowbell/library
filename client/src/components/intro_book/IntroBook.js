import React, {useEffect, useState} from 'react';
import fullstar from './../../images/fullstar.png';
import halfstar from './../../images/halfstar.png';
import arrow from './../../images/arrow.png';
import {CATALOG_ROUTE} from "../../utils/consts";
import {NavLink, useParams} from "react-router-dom";
import img_bk1 from "./../../images/img_bk1.png";
import img_bk3 from "./../../images/img_bk3.png";
import scribble from "./../../images/scribble.png";
import './../intro_catalog/style.css'
import {fetchOneBook} from "../../http/bookAPI";

const IntroBook = () => {
    const [book, setBook] = useState({info: []});
    const {id} = useParams();

    useEffect(() => {
        fetchOneBook(id).then(data => setBook(data))
    }, []);

    return (
        <>
            <section className="catalog__section1">
                <img className="ctlg__intro__img1" src={img_bk1}/>
                <img className="intro__img2" src={img_bk3}/>
                <img className="scrib__ctlg" src={scribble}/>

                <div className="back__catalog">
                    <div className="arrow__back__links">
                        <div>
                            <img src={arrow}/>
                        </div>
                        <div className="back__link">
                            <NavLink to={CATALOG_ROUTE} className="bck__link">В каталог</NavLink>
                        </div>
                    </div>

                    <div className="tags__title__prod">
                        <div className="title__prod">
                            <p className="title__author">{book.author}</p>
                            <p className="title__name">{book.name}</p>
                        </div>
                        <div className="title__tags">
                            <a className="title__tag__btn" href="">роман</a>
                            <a className="title__tag__btn" href="">драма</a>
                            <a className="title__tag__btn" href="">отечественное</a>
                        </div>
                    </div>

                    <div className="title__rating">
                        <div className="full__star">
                            <img src={fullstar}/>
                        </div>
                        <div className="full__star">
                            <img src={fullstar}/>
                        </div>
                        <div className="full__star">
                            <img src={fullstar}/>
                        </div>
                        <div className="full__star">
                            <img src={fullstar}/>
                        </div>
                        <div className="half__star">
                            <img src={halfstar}/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default IntroBook;