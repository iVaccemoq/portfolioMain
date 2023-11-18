import Window from "../window/Window";
import Scroll from "../scroll/Scroll";

import './mainScreen.scss'

const MainScreen = (props) => {
    return (
        <div className="main-screen">
            {props.children}
        </div>
    )
}

export default MainScreen;

