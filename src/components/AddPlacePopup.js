import {PopupWithForm} from "./PopupWithForm";
import React, {useState, useRef, useEffect} from "react";
import {Input} from "./Input";

export function AddPlacePopup(props) {
    const [name, setName] = useState('')
    const [link, setLink] = useState('')
    const nameInput = useRef(name)
    const linkInput = useRef(link)

    useEffect(() => {
        if(props.isOpen) {
            setName('');
            setLink('')
        }
    }, [props.isOpen])

    function handleNameChange(e) {
        setName(e.target.value);
    }

    function handleLinkChange(e) {
        setLink(e.target.value);
    }

    function handleSubmit(evt) {
        evt.preventDefault()

        props.onAddPlace({
            name: nameInput.current.value,
            link: linkInput.current.value
        })
    }

    return(
        <PopupWithForm
            name="add-cards"
            title="Новое место"
            button="Создать"
            onClose={props.onClose}
            isOpen={props.isOpen}
            onSubmit={handleSubmit}
        >
            <Input
                type="text"
                className="heading"
                id="photo-name"
                name="name"
                placeholder="Название"
                minLength="2"
                maxLength="30"
                value={name}
                onChange={handleNameChange}
                ref={nameInput}
            >
            </Input>
            <span className="form__input-error photo-name-error"></span>
            <Input
                type="url"
                className="subheading"
                id="photo-link"
                name="link"
                placeholder="Ссылка на картинку"
                value={link}
                onChange={handleLinkChange}
                ref={linkInput}
            >
            </Input>
            <span className="form__input-error photo-link-error"></span>
        </PopupWithForm>
    )
}