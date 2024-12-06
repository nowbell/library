import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../../index";
import BookItem from "./BookItem";

const BookBar = observer(() => {
    const {book} = useContext(Context)

    return (
        <>
            <div className="books__blocks">
                {book.books.map(book =>
                    <BookItem key={book.id} book={book}/>
                )}
            </div>
        </>
    );
});

export default BookBar;