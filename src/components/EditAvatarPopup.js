import {PopupWithForm} from "./PopupWithForm";
import React, {useContext, useEffect, useRef, useState} from "react";
import {Input} from "./Input";
import {CurrentUserContext} from "../contexts/CurrentUserContext";

export function EditAvatarPopup(props) {
    const {currentUser} = useContext(CurrentUserContext);
    const [avatar, setAvatar] = useState(currentUser.avatar);
    const textInput = useRef(avatar)

    useEffect(() => {
        if (props.isOpen) {
            setAvatar("");
        } else {
            setAvatar(currentUser.avatar);
        }
    }, [props.isOpen, currentUser]);

    function handleAvatarChange(e) {
        setAvatar(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault();
        props.onUpdateAvatar({
            avatar: textInput.current.value,
        });
    }

    return(
        <PopupWithForm
            name="edit-avatar"
            title="Обновить аватар"
            button="Сохранить"
            onClose={props.onClose}
            isOpen={props.isOpen}
            onSubmit={handleSubmit}
        >
            <Input
                type="url"
                className="heading"
                id="avatar-link"
                name="link"
                placeholder="Ссылка на картинку"
                value={avatar}
                onChange={handleAvatarChange}
                ref={textInput}
            >
            </Input>
            <span className="form__input-error avatar-link-error"></span>
        </PopupWithForm>
    )
}