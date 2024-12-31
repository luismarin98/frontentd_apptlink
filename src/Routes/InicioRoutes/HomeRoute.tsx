import { StartProvider } from "../../Features/InicioFeature/provider"
import { HOME_VIEW } from "../../Features/InicioFeature/Views/HomeView"


export const HOME_ROUTE = () => {
    return <StartProvider children={<HOME_VIEW />} />
}