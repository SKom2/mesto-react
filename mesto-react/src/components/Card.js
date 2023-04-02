import React, { useState } from "react";
import { ImagePopup } from "./ImagePopup";

export function Card(props) {
    const [popupVisible, setPopupVisible] = useState(false);
    const [selectedCard, setSelectedCard] = useState([]);

    function handleCardImageClick(card) {
        setPopupVisible(true);
        setSelectedCard(card);
    }
    function handlePopupClose() {
        setPopupVisible(false);
    }

    return (
        <>
            <section className="main__places places root__container">
                {props.cards.map((card) => (
                    <article className="card" key={card._id}>
                        <img
                            alt=""
                            className="card__image"
                            style={{ backgroundImage: `url(${card.link})` }}
                            onClick={() => handleCardImageClick(card)}
                        ></img>
                        <div className="card__heading">
                            <h2 className="card__title">{card.name}</h2>
                            <div className="card__likes">
                                <button type="button" className="card__like">
                                    {card.likes._id}
                                </button>
                                <span className="card__like-counter">{card.likes.length}</span>
                            </div>
                        </div>
                        <button type="button" className="card__delete"></button>
                    </article>
                ))}
            </section>
            {selectedCard && (
                <ImagePopup
                    id={selectedCard._id}
                    link={selectedCard.link}
                    name={selectedCard.name}
                    isOpen={popupVisible}
                    onClose={handlePopupClose}
                />
            )}

        </>
    );
}
