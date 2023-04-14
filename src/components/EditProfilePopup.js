import {useState, useEffect, useContext} from "react";
import {Input} from "./Input";
import {PopupWithForm} from "./PopupWithForm";
import {CurrentUserContext} from "../contexts/CurrentUserContext";

export function EditProfilePopup (props) {
    const {currentUser} = useContext(CurrentUserContext);
    const [name, setName] = useState(currentUser.name)
    const [description, setDescription] = useState(currentUser.about);

    useEffect(() => {
        setName(currentUser.name);
        setDescription(currentUser.about);
    }, [currentUser]);

    function handleNameChange(e) {
        setName(e.target.value)
    }

    function handleDescriptionChange(e) {
        setDescription(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault();
        props.onUpdateUser({
            name,
            about: description,
        });
    }

    return (
        <PopupWithForm
            name="edit-profile"
            title="Редактировать профиль"
            button="Сохранить"
            onClose={props.onClose}
            isOpen={props.isOpen}
            onSubmit={handleSubmit}
        >
            <Input
                type="text"
                className="heading"
                id="name"
                name="name"
                placeholder="Имя"
                minLength="2"
                maxLength="40"
                value={name}
                onChange={handleNameChange}
            />
            <span className="form__input-error name-error"></span>
            <Input
                type="text"
                className="subheading"
                id="about-person"
                name="about"
                placeholder="О себе"
                minLength="2"
                maxLength="200"
                value={description}
                onChange={handleDescriptionChange}
            />
            <span className="form__input-error about-person-error"></span>
        </PopupWithForm>
    )
}