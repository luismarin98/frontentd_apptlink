import { StartProvider } from "../../Features/InicioFeature/provider"
import { VERFICATE_VIEW } from "../../Features/InicioFeature/Views/VerficateView"

export const VERIFICATE_ROUTE = () => {
    return <StartProvider children={<VERFICATE_VIEW />} />
}