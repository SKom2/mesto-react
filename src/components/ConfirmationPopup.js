import {PopupWithForm} from "./PopupWithForm";

export function ConfirmationPopup(props) {

    function handleSubmit(e) {
        e.preventDefault();
        props.onCardDelete(props.card)
    }

    return(
        <PopupWithForm
            name="delete-card"
            title="Вы уверены?"
            button="Да"
            onClose={props.onClose}
            isOpen={props.isOpen}
            onSubmit={handleSubmit}
        />
    )
}