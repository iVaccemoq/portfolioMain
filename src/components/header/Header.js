import { Link } from 'react-router-dom';

import './header.scss'

const Header = () => {
    return (
        <header className="header">
            <ol className="header__wrapper">
                <li className="header__info">Vasilivanov-Konstantin</li>
                <li className="header__info">
                    <Link to="/">_hello</Link>
                </li>
                <li className="header__info">
                    <Link to="/about">_about-me</Link>
                </li>
                <li className="header__info">
                    <Link to="/projects">_projects</Link>
                </li>
            </ol>
            <div className="header__contact-me header__info">
                <Link to="/contacts">_contact-me</Link>
            </div>
        </header>
    )
}

export default Header;