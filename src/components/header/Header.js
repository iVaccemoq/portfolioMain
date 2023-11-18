import { Link } from 'react-router-dom/cjs/react-router-dom';

import './header.scss'

const Header = () => {
    return (
        <header className="header">
            <ol className="header__wrapper">
                <li className="header__info">Vasilivanov-Konstantin</li>
                <li className="header__info">
                    <a href="/">_hello</a>
                </li>
                <li className="header__info">
                    <a href="/about">_about-me</a>
                </li>
                <li className="header__info">
                    <a href="/projects">_projects</a>
                </li>
            </ol>
            <div className="header__contact-me header__info">
                <a href="/contact">_contact-me</a>
            </div>
        </header>
    )
}

export default Header;