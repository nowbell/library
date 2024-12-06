import React, {useState} from 'react';
import {Button, Form, FormControl, Modal} from "react-bootstrap";
import {createGenre} from "../../http/bookAPI";

const CreateGenre = ({show, onHide}) =>  {
    const [value, setValue] = useState('');

    const addGenre = () => {
        createGenre({name: value}).then(data => {
            setValue('')
            onHide()
        })
    }

    return (
        <>
            <Modal
                show={show}
                onHide={onHide}
                size="lg"
                centered
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Добавить жанр</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <FormControl
                            value={value}
                            onChange={e => setValue(e.target.value)}
                            placeholder={"Введите название жанра"}
                        />
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={onHide}>
                        Закрыть
                    </Button>
                    <Button variant="primary" onClick={addGenre}>Добавить</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default CreateGenre;