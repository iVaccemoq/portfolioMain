import './footer.scss';

import vk from '../../resourses/vk.svg';
import telegram from '../../resourses/telegram.svg';
import github from '../../resourses/github.svg';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__wrapper">
                <div className="footer__find-me">find me in:</div>
                <a href="" className="footer__link">
                    <img src={vk} alt="" className="footer__img" />
                </a>
                <a href="" className="footer__link">
                    <img src={telegram} alt="" className="footer__img" />
                </a>
            </div>
            <div className="footer__username">
                @iVaccemoq
                <a href="" className="footer__link">
                    <img className='footer__img'  src={github} alt="" />
                </a>
            </div>   
        </footer>
    )
}

export default Footer;