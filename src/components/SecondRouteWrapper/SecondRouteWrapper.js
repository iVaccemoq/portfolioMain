import Gpspanel from "../gps-panel/Gps-panel";
import AsideEntrails from "../asideEntrails/AsideEntrails";
import MainScreen from "../mainScreen/MainScreen";
import Window from "../window/Window";
import MainScreenEntralis from "../mainScreenEntralis/MainScreenEntralis";
import Scroll from "../scroll/Scroll";

const SecondRouteWrapper = () => {
    return (
        <main className="App__two-page-wrapper">
            <Gpspanel>
                <AsideEntrails filter='personal-info'/>
                <AsideEntrails filter='contacts'/>
            </Gpspanel>
            <MainScreen>
                <Window window='personal-info'/>
                <MainScreenEntralis/>
                <Scroll/>
            </MainScreen>
        </main>
    )
}

export default SecondRouteWrapper;