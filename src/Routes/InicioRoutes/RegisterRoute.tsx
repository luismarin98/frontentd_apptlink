import { StartProvider } from "../../Features/InicioFeature/provider"
import { REGISTER_VIEW } from "../../Features/InicioFeature/Views/RegisterView"

export const REGISTER_ROUTE = () => {
    return <StartProvider children={<REGISTER_VIEW />} />
}