export function PopupWithForm(props) {
    return (
        <div className="popup" id={`popup_${props.name}`}>
            <div className="popup__container">
                <button type="button" className="popup__close" onClick={props.onClose}></button>
                <form className="popup__form form" id={`${props.name}_form`} name={props.name} noValidate>
                    <h2 className="form__title">{props.title}</h2>
                    {props.children}
                    <button className="form__button" type="submit">{props.button}</button>
                </form>
            </div>
        </div>
    )
}