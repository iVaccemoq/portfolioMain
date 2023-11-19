import Gpspanel from "../gps-panel/Gps-panel"
import MainScreen from "../mainScreen/MainScreen"
import Window from "../window/Window"
import Scroll from "../scroll/Scroll"
import AsideEntrails from "../asideEntrails/AsideEntrails"
import MainFrameThirdPage from "../mainFrameThirdPage/MainFrameThirdPage"

const ThirdRouteWrapper = () => {
    return (
        <main className="App__two-page-wrapper">
            <Gpspanel>
                <AsideEntrails filter='projects'/>
            </Gpspanel>
            <MainScreen>
                <Window window='React'/>
                <MainFrameThirdPage/>
                <Scroll/>
            </MainScreen>
        </main>
    )
}

export default ThirdRouteWrapper;