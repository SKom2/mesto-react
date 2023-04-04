export function Card(props) {
    return (
        <>
            <article className="card" key={props.card._id}>
                <img
                    alt=""
                    className="card__image"
                    style={{ backgroundImage: `url(${props.card.link})` }}
                    onClick={() => props.onCardClick(props.card)}
                ></img>
                <div className="card__heading">
                    <h2 className="card__title">{props.card.name}</h2>
                    <div className="card__likes">
                        <button type="button" className="card__like">
                            {props.card.likes._id}
                        </button>
                        <span className="card__like-counter">{props.card.likes.length}</span>
                    </div>
                </div>
                <button type="button" className="card__delete"></button>
            </article>
        </>
    );
}
