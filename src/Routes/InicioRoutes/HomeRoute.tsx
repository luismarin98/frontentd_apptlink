import { START_FEATURE } from "../../Features/InicioFeature"
import { StartProvider } from "../../Features/InicioFeature/provider"


export const HOME_ROUTE = () => {
    return <StartProvider children={<START_FEATURE />} />
}