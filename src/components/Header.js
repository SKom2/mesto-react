import Logo from "../images/header/Vector.svg";

export function Header() {
    return (
        <header className="header root__container">
            <img src={Logo} alt="Место" className="header__logo"></img>
        </header>
    )
}