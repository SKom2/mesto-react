export function Main(props) {
    return(
        <main className="main">
            <section className="main__profile profile root__container">
                <div className="profile__body">
                    <button className="profile__edit-avatar" onClick={props.onEditAvatar}>
                        <img src="mesto-react/src#" alt="Аватар" className="profile__avatar"></img>
                    </button>
                    <div className="profile__info">
                        <div className="profile__header">
                            <h1 className="profile__title">Жак Ив Кусто</h1>
                            <button aria-label="Кнопка для открытия попапа" type="button" className="profile__button profile__button_type_edit button" id="button_edit" onClick={props.onEditProfile}></button>
                        </div>
                        <p className="profile__subtitle">Исследователь океана</p>
                    </div>
                    <button type="button" className="profile__button profile__button_type_add button" id="button_add" onClick={props.onAddPlace}></button>
                </div>
            </section>

            <section className="main__places places root__container">
            </section>
        </main>
    )
}