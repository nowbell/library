import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../../index";

const GenreBar = observer(() => {
    const {book} = useContext(Context)
    return (
        <>
            <div className="ctlg__genres">
                <div className="genres">
                    {book.genres.map(genre =>
                        <a
                            style={{cursor: 'pointer'}}
                            active={genre.id === book.selectedGenre.id}
                            onClick={() => book.setSelectedGenre(genre)}
                            key={genre.id}
                            className="genre"
                        >
                            {genre.name}</a>
                        )}
                </div>
                <div className="genres__line"></div>
            </div>
        </>
    );
});

export default GenreBar;