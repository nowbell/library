import React from 'react';
import {NavLink} from "react-router-dom";
import {BOOK_ROUTE} from "../../utils/consts";

const BookItem = ({book}) => {
    return (
        <>
            <div className="book__blcks__block">
                <div className="block__content">
                    <img className="content__img" src={process.env.REACT_APP_API_URL + book.img}/>
                    <div className="content__info">
                        <div className="info__author"><span>{book.author}</span></div>
                        <div className="info__name">
                            <p>{book.name}</p>
                        </div>
                        <div className="info__description">
                            {book.summary}
                        </div>
                        <div className="info__tags__buy">
                            <div className="tags__buy__line"></div>
                            <div className="tags__buy__blocks">
                                <div className="tags">
                                    <a className="tags__btn" href="">роман</a>
                                    <a className="tags__btn" href="">драма</a>
                                    <a className="tags__btn" href="">отечественная</a>
                                </div>
                                <div className="buy">
                                    <NavLink to={BOOK_ROUTE + '/' + book.id} className="buy__btn">перейти</NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BookItem;