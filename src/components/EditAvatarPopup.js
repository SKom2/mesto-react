import {PopupWithForm} from "./PopupWithForm";
import {Input} from "./Input";
import {useForm} from "../hooks/useForm";

export function EditAvatarPopup(props) {
    const { values, handleChange, resetForm, errors, isValid } = useForm();

    function handleSubmit(e) {
        e.preventDefault();
        props.onUpdateAvatar({
            avatar: values.avatar,
        });
        resetForm()
    }

    return(
        <PopupWithForm
            name="edit-avatar"
            title="Обновить аватар"
            button="Сохранить"
            onClose={props.onClose}
            isOpen={props.isOpen}
            onSubmit={handleSubmit}
            isValid={isValid}
        >
            <Input
                type="url"
                className="heading"
                id="avatar-link"
                name="avatar"
                placeholder="Ссылка на картинку"
                value={values.avatar || ''}
                onChange={handleChange}
            >
            </Input>
            <span className="form__input-error avatar-link-error">{errors.avatar}</span>
        </PopupWithForm>
    )
}