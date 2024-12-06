import React, {useState} from 'react';
import Footer from "../components/footer/Footer";
import Nav from "../components/nav/Nav";
import './../styles/style.css'
import {NavLink} from "react-router-dom";
import CreateGenre from "../components/modals/CreateGenre";
import CreateBook from "../components/modals/CreateBook";


const Admin = () => {
    const [genreVisible, setGenreVisible] = useState(false);
    const [bookVisible, setBookVisible] = useState(false);
    return (
        <>

            <Nav />

            <section className="admin__panel">
                <h1 className={"admin__header"}>Админ панель</h1>
                <div className="admin__buttons">
                    <NavLink onClick={() => setGenreVisible(true)} className={({isActive}) => (isActive ? 'admin__btn' : 'admin__btn')}>Добавить
                        жанр </NavLink>
                    <NavLink onClick={() => setBookVisible(true)} className={({isActive}) => (isActive ? 'admin__btn' : 'admin__btn')}>Добавить
                        книгу</NavLink>
                </div>

                <CreateGenre show={genreVisible} onHide={() => setGenreVisible(false)}/>
                <CreateBook show={bookVisible} onHide={() => setBookVisible(false)}/>
            </section>

            <Footer/>
        </>
    );
};

export default Admin;