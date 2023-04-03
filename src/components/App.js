import '../App.css';
import {Header} from "./Header";
import {Main} from "./Main";
import {Footer} from "./Footer";
import {PopupWithForm} from "./PopupWithForm";
import {ImagePopup} from "./ImagePopup";
import React, {useState} from "react";
import {Card} from "./Card";
import {apiConfig} from "../utils/constants.js";
import {Api} from "../modules/Api";

function App() {
    const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
    const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
    const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
    const [isClickCardPopupOpen, setClickCardPopupOpen] = useState(false);
    const [isPopupClose, setPopupClose] = React.useState(false);
    const [cards, setCards] = React.useState([]);
    const [selectedCard, setSelectedCard] = useState([]);

    const api = new Api(apiConfig);

    React.useEffect(() => {
        api.getCards()
            .then((cardsData) => {
                setCards(cardsData);
            })
            .catch(err => console.log(`Ошибка: ${err}`))
    })

    function handleEditProfileClick() {
        setPopupClose(false)
        if (isEditProfilePopupOpen === false) {
            const popupEditProfile = document.querySelector('#popup_edit-profile');
            popupEditProfile.classList.add('popup_opened');
            setEditProfilePopupOpen(!isEditProfilePopupOpen);
        }
    }

    function handleAddPlaceClick() {
        setPopupClose(false)
        if (isAddPlacePopupOpen === false) {
            const popupAddPlace = document.querySelector('#popup_add-cards');
            popupAddPlace.classList.add('popup_opened');
            setAddPlacePopupOpen(!isAddPlacePopupOpen)
        }
    }

    function handleEditAvatarClick(){
        setPopupClose(false)
        if (isAddPlacePopupOpen === false) {
            const popupEditAvatar = document.querySelector('#popup_edit-avatar')
            popupEditAvatar.classList.add('popup_opened');
            setEditAvatarPopupOpen(!isEditAvatarPopupOpen);
        }
    }

    function handleCardImageClick(card) {
        setClickCardPopupOpen(!isClickCardPopupOpen);
        setSelectedCard(card);
    }

    function closeAllPopups() {
        if (isPopupClose === false) {
            const popups = document.querySelectorAll('.popup')
            popups.forEach((popup) => {
                popup.classList.remove('popup_opened');
                if(isEditProfilePopupOpen){
                    setPopupClose(!isPopupClose);
                    setEditProfilePopupOpen(!isEditProfilePopupOpen);
                }
                if(isAddPlacePopupOpen){
                    setPopupClose(!isPopupClose);
                    setAddPlacePopupOpen(!isAddPlacePopupOpen);
                }
                if(isEditAvatarPopupOpen){
                    setPopupClose(!isPopupClose);
                    setEditAvatarPopupOpen(!isEditAvatarPopupOpen);
                }
                if (isClickCardPopupOpen) {
                    setClickCardPopupOpen(!isClickCardPopupOpen)
                }
            })
        }
    }

    return (
        <>
          <Header></Header>
          <Main
              onEditProfile = {handleEditProfileClick}
              onAddPlace = {handleAddPlaceClick}
              onEditAvatar = {handleEditAvatarClick}
          >
          </Main>
          <Card cards={cards} onCardClick={handleCardImageClick}></Card>
          <Footer></Footer>


          <PopupWithForm name="edit-profile" title="Редактировать профиль" button="Сохранить" onClose={closeAllPopups}>
              <input type="text" className="form__input form__input_el_heading" id="name" name="name" placeholder="Имя" minLength="2" maxLength="40" required></input>
              <span className="form__input-error name-error"></span>
              <input type="text" className="form__input form__input_el_subheading" id="about-person" name="about" placeholder="О себе" minLength="2" maxLength="200" required></input>
              <span className="form__input-error about-person-error"></span>
          </PopupWithForm>
          <PopupWithForm name="add-cards" title="Новое место" button="Создать" onClose={closeAllPopups}>
              <input type="text" className="form__input form__input_el_heading" id="photo-name" name="name" placeholder="Название" minLength="2" maxLength="30" required></input>
              <span className="form__input-error photo-name-error"></span>
              <input type="url" className="form__input form__input_el_subheading" id="photo-link" name="link" placeholder="Ссылка на картинку" required></input>
              <span className="form__input-error photo-link-error"></span>
          </PopupWithForm>
          <PopupWithForm name="edit-avatar" title="Обновить аватар" button="Сохранить" onClose={closeAllPopups}>
              <input type="url" className="form__input form__input_el_heading" id="avatar-link" name="link" placeholder="Ссылка на картинку" required></input>
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
        </>
      );
    }

export default App;
