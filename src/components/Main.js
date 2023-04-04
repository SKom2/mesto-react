import React from "react";
import {apiConfig} from "../utils/constants.js";
import {Api} from "../modules/Api";
import {Card} from "./Card";

export function Main(props) {
    const [userName, setUserName] = React.useState('Жак-Ив-Кусто');
    const [userDescription, setUserDescription] = React.useState('Исследователь океана');
    const [userAvatar, setUserAvatar] = React.useState('https://static-cse.canva.com/blob/846900/photo1502082553048f009c37129b9e1583341920812.jpeg');
    const [cards, setCards] = React.useState([]);

    React.useEffect(() => {
        const api = new Api(apiConfig)
        api.getProfile()
            .then((userData) => {
                setUserName(userData.name);
                setUserDescription(userData.about);
                setUserAvatar(userData.avatar);
            })
            .catch(err => console.log(`Ошибка: ${err}`))
        api.getCards()
            .then((cardsData) => {
                setCards(cardsData);
            })
            .catch(err => console.log(`Ошибка: ${err}`))
    }, [])

    return(
        <>
            <main className="main">
                <section className="main__profile profile root__container">
                    <div className="profile__body">
                        <button
                            className="profile__edit-avatar"
                            onClick={props.onEditAvatar}
                            style={{backgroundImage: `url(${userAvatar})`}}>
                        </button>
                        <div className="profile__info">
                            <div className="profile__header">
                                <h1 className="profile__title">{userName}</h1>
                                <button
                                    aria-label="Кнопка для открытия попапа"
                                    type="button"
                                    className="profile__button profile__button_type_edit button"
                                    id="button_edit"
                                    onClick={props.onEditProfile}>
                                </button>
                            </div>
                            <p className="profile__subtitle">{userDescription}</p>
                        </div>
                        <button
                            type="button"
                            className="profile__button profile__button_type_add button"
                            id="button_add"
                            onClick={props.onAddPlace}>
                        </button>
                    </div>
                </section>
                <section className="main__places places root__container">
                    {cards.map((card) => (
                        <Card
                            card={card}
                            key={card._id}
                            onCardClick={props.onCardClick}
                        />
                    ))}
                </section>
            </main>
        </>
    )
}