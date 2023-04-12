import '../App.css';
import {Header} from "./Header";
import {Main} from "./Main";
import {Footer} from "./Footer";
import {PopupWithForm} from "./PopupWithForm";
import {ImagePopup} from "./ImagePopup";
import React, {useEffect, useState} from "react";
import {Api} from "../modules/Api";
import {apiConfig} from "../utils/constants";
import {CurrentUserContext} from "../contexts/CurrentUserContext";
import {EditProfilePopup} from "./EditProfilePopup";

function App() {
    const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
    const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
    const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
    const [isClickCardPopupOpen, setClickCardPopupOpen] = useState(false);
    const [selectedCard, setSelectedCard] = useState([]);
    const [currentUser, setCurrentUser] = useState([])
    const [cards, setCards] = useState([]);

    const api = new Api(apiConfig);

    useEffect(() => {
        api.getProfile()
            .then((userData) => {
                setCurrentUser(userData)
            })
        api.getCards()
            .then((cardsData) => {
                setCards(cardsData);
            })
            .catch(err => console.log(`Ошибка: ${err}`))
    }, [])

    function handleEditProfileClick() {
        setEditProfilePopupOpen(true);
    }

    function handleAddPlaceClick() {
        setAddPlacePopupOpen(true)
    }

    function handleEditAvatarClick(){
        setEditAvatarPopupOpen(true);
    }

    function handleCardImageClick(card) {
        setClickCardPopupOpen(true);
        setSelectedCard(card);
    }

    function closeAllPopups() {
        setAddPlacePopupOpen(false)
        setEditProfilePopupOpen(false)
        setEditAvatarPopupOpen(false)
        setClickCardPopupOpen(false)
    }

    function handleCardLike(card) {
        const isLiked = card.likes.some(i => i._id === currentUser._id);

        if (isLiked) {
            api.handleControlLikes("DELETE", card._id)
                .then((newCard) => {
                    setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
                });
        } else {
            api.handleControlLikes("PUT", card._id)
                .then((newCard) => {
                    setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
                });
        }
    }

    function handleCardDelete(card) {
        api.deleteCard(card._id)
            .then(() => {
                setCards((state) => state.filter((c) => c._id !== card._id));
            })
    }

    function handleUpdateUser(data) {
        api.editProfile(data)
            .then((updateUser) => {
                setCurrentUser(updateUser)
                closeAllPopups()
            })
    }

    return (
        <CurrentUserContext.Provider value={{ currentUser, cards }}>
          <Header />
          <Main
              onEditProfile = {handleEditProfileClick}
              onAddPlace = {handleAddPlaceClick}
              onEditAvatar = {handleEditAvatarClick}
              onCardClick = {handleCardImageClick}
              onCardLike = {handleCardLike}
              onCardDelete = {handleCardDelete}
          >
          </Main>
          <Footer />
          <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser}/>
          <PopupWithForm
              name="add-cards"
              title="Новое место"
              button="Создать"
              onClose={closeAllPopups}
              isOpen={isAddPlacePopupOpen}
          >
              <input
                  type="text"
                  className="form__input form__input_el_heading"
                  id="photo-name"
                  name="name"
                  placeholder="Название"
                  minLength="2"
                  maxLength="30"
                  required>
              </input>
              <span className="form__input-error photo-name-error"></span>
              <input
                  type="url"
                  className="form__input form__input_el_subheading"
                  id="photo-link"
                  name="link"
                  placeholder="Ссылка на картинку"
                  required>
              </input>
              <span className="form__input-error photo-link-error"></span>
          </PopupWithForm>
          <PopupWithForm
              name="edit-avatar"
              title="Обновить аватар"
              button="Сохранить"
              onClose={closeAllPopups}
              isOpen={isEditAvatarPopupOpen}
          >
              <input
                  type="url"
                  className="form__input form__input_el_heading"
                  id="avatar-link"
                  name="link"
                  placeholder="Ссылка на картинку"
                  required>
              </input>
              <span className="form__input-error avatar-link-error"></span>
          </PopupWithForm>
          {selectedCard && (
            <ImagePopup
                id={selectedCard._id}
                link={selectedCard.link}
                name={selectedCard.name}
                isOpen={isClickCardPopupOpen}
                onClose={closeAllPopups}
            />
          )}
        </CurrentUserContext.Provider>
      );
    }

export default App;
