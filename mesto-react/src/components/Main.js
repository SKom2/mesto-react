export function Main() {

    function handleEditAvatarClick(){
        const popupEditAvatar = document.querySelector('#popup_edit-avatar')
        popupEditAvatar.classList.add('popup_opened')
    }

    function handleEditProfileClick() {
        const popupEditProfile = document.querySelector('#popup_edit');
        popupEditProfile.classList.add('popup_opened')
    }

    function handleAddPlaceClick() {
        const popupAddPlace = document.querySelector('#popup_add');
        popupAddPlace.classList.add('popup_opened')
    }

    return(
        <main className="main">
            <section className="main__profile profile root__container">
                <div className="profile__body">
                    <button className="profile__edit-avatar" onClick={handleEditAvatarClick}>
                        <img src="mesto-react/src#" alt="Аватар" className="profile__avatar"></img>
                    </button>
                    <div className="profile__info">
                        <div className="profile__header">
                            <h1 className="profile__title">Жак Ив Кусто</h1>
                            <button aria-label="Кнопка для открытия попапа" type="button" className="profile__button profile__button_type_edit button" id="button_edit" onClick={handleEditProfileClick}></button>
                        </div>
                        <p className="profile__subtitle">Исследователь океана</p>
                    </div>
                    <button type="button" className="profile__button profile__button_type_add button" id="button_add" onClick={handleAddPlaceClick}></button>
                </div>
            </section>

            <section className="main__places places root__container">
            </section>
        </main>
    )
}