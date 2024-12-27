import { StartProvider } from "../../Features/InicioFeature/provider"
import { LOGIN_VIEW } from "../../Features/InicioFeature/Views/LoginView"


export const LOGIN_ROUTE = () => {
    return <StartProvider children={<LOGIN_VIEW />} />
}