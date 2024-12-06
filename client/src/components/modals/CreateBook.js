import React, {useContext, useEffect, useState} from 'react';
import {Button, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Form, FormControl, Modal} from "react-bootstrap";
import {Context} from "../../index";
import {createBook, fetchBooks, fetchGenres} from "../../http/bookAPI";
import {observer} from "mobx-react-lite";

const CreateBook = observer(({show, onHide}) => {
    const {book} = useContext(Context)

    const [author, setAuthor] = useState('');
    const [name, setName] = useState('');
    const [summary, setSummary] = useState('');
    const [quote, setQuote] = useState('');
    const [img, setImg] = useState(null);
    const [img_author, setImgAuthor] = useState(null);

    useEffect(() => {
        fetchGenres().then(data => book.setGenres(data));
        fetchBooks().then(data => book.setBooks(data.rows));
    }, []);

    const selectFile = e => {
        setImg(e.target.files[0]);
    }

    const selectFileAuthor = e => {
        setImgAuthor(e.target.files[0]);
    }

    const addBook = () => {
        const formData = new FormData();
        formData.append("author", author);
        formData.append("name", name);
        formData.append("img", img);
        formData.append("img_author", img_author);
        formData.append("summary", summary);
        formData.append("quote", quote);
        createBook(formData).then(data => onHide())
    }

    return (
        <>
            <Modal
                show={show}
                onHide={onHide}
                backdrop="static"
                keyboard={false}
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title>Добавить книгу</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <FormControl
                            value={author}
                            onChange={e => setAuthor(e.target.value)}
                            className="mt-2"
                            placeholder={"Введите автора книги"}
                        />
                        <FormControl
                            value={name}
                            onChange={e => setName(e.target.value)}
                            className="mt-2"
                            placeholder={"Введите наименование книги"}
                        />
                        <FormControl
                            value={summary}
                            onChange={e => setSummary(e.target.value)}
                            className="mt-2"
                            placeholder={"Введите краткое содержание книги"}
                        />
                        <FormControl
                            value={quote}
                            onChange={e => setQuote(e.target.value)}
                            className="mt-2"
                            placeholder={"Введите яркую цитату из книги"}
                        />
                        <h4 className="mt-2" style={{fontSize: 16}}>Загрузка фото книги</h4>
                        <FormControl
                            className="mt-2"
                            type="file"
                            onChange={selectFile}
                        />
                        <h4 className="mt-2" style={{fontSize: 16}}>Загрузка фото автора</h4>
                        <FormControl
                            className="mt-2"
                            type="file"
                            onChange={selectFileAuthor}
                        />
                        <hr/>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={onHide}>
                        Закрыть
                    </Button>
                    <Button variant="primary" onClick={addBook} n>Добавить</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
});

export default CreateBook;