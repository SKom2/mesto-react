import '../App.css';
import {Header} from "./Header";
import {Main} from "./Main";
import {Footer} from "./Footer";
import {PopupWithForm} from "./PopupWithForm";
import {ImagePopup} from "./ImagePopup";
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

      <PopupWithForm name="edit-profile" title="Редактировать профиль" button="Сохранить">
          <input type="text" className="form__input form__input_el_heading" id="name" name="name" placeholder="Имя" minLength="2" maxLength="40" required></input>
          <span className="form__input-error name-error"></span>
          <input type="text" className="form__input form__input_el_subheading" id="about-person" name="about" placeholder="О себе" minLength="2" maxLength="200" required></input>
          <span className="form__input-error about-person-error"></span>
      </PopupWithForm>
      <PopupWithForm name="add-cards" title="Новое место" button="Создать">
          <input type="text" className="form__input form__input_el_heading" id="photo-name" name="name" placeholder="Название" minLength="2" maxLength="30" required></input>
          <span className="form__input-error photo-name-error"></span>
          <input type="url" className="form__input form__input_el_subheading" id="photo-link" name="link" placeholder="Ссылка на картинку" required></input>
          <span className="form__input-error photo-link-error"></span>
      </PopupWithForm>
      <PopupWithForm name="photo">
          <img alt="#" className="popup__image"></img>
          <h2 className="popup__title"></h2>
      </PopupWithForm>
      <ImagePopup></ImagePopup>
      <PopupWithForm name="edit-avatar" title="Обновить аватар" button="Сохранить">
          <input type="url" className="form__input form__input_el_heading" id="avatar-link" name="link" placeholder="Ссылка на картинку" required></input>
          <span className="form__input-error avatar-link-error"></span>
      </PopupWithForm>
    </>
  );
      }

export default App;
