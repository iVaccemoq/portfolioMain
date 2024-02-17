import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';


import './header.scss'

const Header = () => {
    return (
        <header className="header">
            <ol className="header__wrapper">
                <li className="header__info">Vasilivanov-Konstantin</li>
                <li className="header__info">
                    <NavLink style={({isActive}) => ({color: isActive ? 'white' : '#607B96', borderBottom: isActive ? '3px solid #FEA55F' : 'none'})} to="/">_hello</NavLink>
                </li>
                <li className="header__info">
                    <NavLink style={({isActive}) => ({color: isActive ? 'white' : '#607B96', borderBottom: isActive ? '3px solid #FEA55F' : 'none'})} to="/about">_about-me</NavLink>
                </li>
                <li className="header__info">
                    <NavLink style={({isActive}) => ({color: isActive ? 'white' : '#607B96', borderBottom: isActive ? '3px solid #FEA55F' : 'none'})} to="/projects">_projects</NavLink>
                </li>
            </ol>
            <div className="header__contact-me header__info">
                <NavLink style={({isActive}) => ({color: isActive ? 'white' : '#607B96', borderBottom: isActive ? '3px solid #FEA55F' : 'none'})} to="/contacts">_contact-me</NavLink>
            </div>
        </header>
    )
}

export default Header;