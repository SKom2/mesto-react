export function PopupWithForm(props) {
    return (
        <div className="popup" id={props.id}>
            <div className="popup__container">
                <button type="button" className="popup__close"></button>
                <form className="popup__form form" id={props.id} name={props.name} noValidate>
                    <h2 className="form__title">{props.title}</h2>
                    <button className="form__button" type="submit">{props.button}</button>
                </form>
            </div>
        </div>
    )
}