import Gpspanel from "../gps-panel/Gps-panel";
import AsideEntrails from "../asideEntrails/AsideEntrails";
import MainScreen from "../mainScreen/MainScreen";
import Window from "../window/Window";
import Scroll from "../scroll/Scroll";
import MainFrameFourthPage from "../mainFrameFourthPage/MainFrameFourthPage";

const FourthRouteWrapper = () => {
    return (
        <main className="App__two-page-wrapper">
            <Gpspanel>
                <AsideEntrails filter='contacts'/>
                <AsideEntrails filter='find-me-also-in'/>
            </Gpspanel>
            <MainScreen>
                <Window window='contacts'/>
                <MainFrameFourthPage/>
                <Scroll/>
            </MainScreen>
        </main>
    )
}

export default FourthRouteWrapper;