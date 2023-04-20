export function PopupWithForm(props) {

    return (
            <div className={`popup ${props.isOpen ? "popup_opened" : ""}`} id={`popup_${props.name}`}>
            <div className="popup__container">
                <button type="button" className="popup__close" onClick={props.onClose}></button>
                <form className="popup__form form" id={`${props.name}_form`} noValidate name={props.name} onSubmit={props.onSubmit}>
                    <h2 className="form__title">{props.title}</h2>
                    {props.children}
                    <button className={`form__button ${!props.isValid ? "form__button_inactive" : ""}`} disabled={!props.isValid} type="submit">{props.isLoad ? props.loadButton : props.button}</button>
                </form>
            </div>
        </div>
    )
}