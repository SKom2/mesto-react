import '../App.css';
import {Header} from "./Header";
import {Main} from "./Main";
import {Footer} from "./Footer";
function App() {
  return (
    <>
      <Header></Header>
      <Main></Main>
      <Footer></Footer>

      <template id="card-template">
        <article className="card">
            <img alt=""  className="card__image"></img>
            <div className="card__heading">
              <h2 className="card__title"></h2>
              <div className="card__likes">
                <button type="button" className="card__like"></button>
                <span className="card__like-counter"></span>
              </div>
            </div>
            <button type="button" className="card__delete"></button>
        </article>
      </template>

      <div className="popup" id="popup_edit">
        <div className="popup__container">
          <button type="button" className="popup__close"></button>
          <form className="popup__form form" id="profileEditForm" name="profileEditForm" noValidate>
            <h2 className="form__title">Редактировать профиль</h2>
            <input type="text" className="form__input form__input_el_heading" id="name" name="name" placeholder="Имя" minLength="2" maxLength="40" required></input>
              <span className="form__input-error name-error"></span>
            <input type="text" className="form__input form__input_el_subheading" id="about-person" name="about" placeholder="О себе" minLength="2" maxLength="200" required></input>
                <span className="form__input-error about-person-error"></span>
                <button className="form__button" type="submit">Сохранить</button>
          </form>
        </div>
      </div>
      <div className="popup" id="popup_add">
        <div className="popup__container">
          <button type="button" className="popup__close"></button>
          <form className="popup__form form" id="cardsAddForm" name="cardsAddForm" noValidate>
            <h2 className="form__title">Новое место</h2>
            <input type="text" className="form__input form__input_el_heading" id="photo-name" name="name" placeholder="Название" minLength="2" maxLength="30" required></input>
              <span className="form__input-error photo-name-error"></span>
            <input type="url" className="form__input form__input_el_subheading" id="photo-link" name="link" placeholder="Ссылка на картинку" required></input>
                <span className="form__input-error photo-link-error"></span>
                <button className="form__button" type="submit">Создать</button>
          </form>
        </div>
      </div>
      <div className="popup popup_type_photo" id="popup_photo">
        <div className="popup__container popup__container_type_photo">
          <button type="button" className="popup__close"></button>
          <img alt="#" className="popup__image"></img>
            <h2 className="popup__title"></h2>
        </div>
      </div>
      <div className="popup" id="popup_delete-card">
        <div className="popup__container">
          <button type="button" className="popup__close"></button>
          <form className="popup__form form" id="deleteCardForm" name="deleteCardForm" noValidate>
            <h2 className="form__title form__delete-card-title">Вы уверены?</h2>
            <button className="form__button" type="submit">Да</button>
          </form>
        </div>
      </div>
      <div className="popup" id="popup_edit-avatar">
        <div className="popup__container">
          <button type="button" className="popup__close"></button>
          <form className="popup__form form" id="avatarEditForm" name="avatarEditForm" noValidate>
            <h2 className="form__title">Обновить аватар</h2>
            <input type="url" className="form__input form__input_el_heading" id="avatar-link" name="link" placeholder="Ссылка на картинку" required></input>
              <span className="form__input-error avatar-link-error"></span>
              <button className="form__button" type="submit">Сохранить</button>
          </form>
        </div>
      </div>
    </>
  );
      }

export default App;
