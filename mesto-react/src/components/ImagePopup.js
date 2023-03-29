export function ImagePopup(props) {
    return (
        <div className="popup popup_type_photo" id="popup_photo">
            <div className="popup__container popup__container_type_photo">
                <button type="button" className="popup__close"></button>
                <img alt="#" className="popup__image"></img>
                    <h2 className="popup__title"></h2>
            </div>
        </div>
    )
}