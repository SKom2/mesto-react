import React from "react";
import {apiConfig} from "../utils/constants.js";
import {Api} from "../modules/Api";

export function Main(props) {
    const [userName, setUserName] = React.useState();
    const [userDescription, setUserDescription] = React.useState();
    const [userAvatar, setUserAvatar] = React.useState();

    const api = new Api(apiConfig)

    React.useEffect(() => {
        api.getProfile()
            .then((userData) => {
                setUserName(userData.name);
                setUserDescription(userData.about);
                setUserAvatar(userData.avatar);
            })
            .catch(err => console.log(`Ошибка: ${err}`))
    })

    return(
        <>
            <main className="main">
                <section className="main__profile profile root__container">
                    <div className="profile__body">
                        <button className="profile__edit-avatar" onClick={props.onEditAvatar} style={{backgroundImage: `url(${userAvatar})`}}></button>
                        <div className="profile__info">
                            <div className="profile__header">
                                <h1 className="profile__title">{userName}</h1>
                                <button aria-label="Кнопка для открытия попапа" type="button" className="profile__button profile__button_type_edit button" id="button_edit" onClick={props.onEditProfile}></button>
                            </div>
                            <p className="profile__subtitle">{userDescription}</p>
                        </div>
                        <button type="button" className="profile__button profile__button_type_add button" id="button_add" onClick={props.onAddPlace}></button>
                    </div>
                </section>
            </main>
        </>
    )
}