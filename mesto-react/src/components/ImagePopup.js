export function ImagePopup(props) {
    return (
        <div
            className={`popup popup_type_photo ${props.isOpen ? "popup_opened" : ""}`}
            id={`${props.id}`}
        >
            <div className="popup__container popup__container_type_photo">
                <button type="button" className="popup__close" onClick={props.onClose}></button>
                <img
                    alt="#"
                    className="popup__image"
                    src={`${props.link}`}
                    style={{ backgroundImage: `${props.link}` }}
                ></img>
                <h2 className="popup__title">{props.name}</h2>
            </div>
        </div>
    );
}
