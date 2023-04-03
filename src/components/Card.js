export function Card(props) {
    return (
        <>
            <section className="main__places places root__container">
                {props.cards.map((card) => (
                    <article className="card" key={card._id}>
                        <img
                            alt=""
                            className="card__image"
                            style={{ backgroundImage: `url(${card.link})` }}
                            onClick={() => props.onCardClick(card)}
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
        </>
    );
}
