import { StartProvider } from "../../Features/InicioFeature/provider"
import { SEN_EMAIL_RECOVER_VIEW } from "../../Features/InicioFeature/Views/SendEmailRecover"

export const SEN_EMAIL_RECOVER_ROUTE = () => {
    return <StartProvider children={<SEN_EMAIL_RECOVER_VIEW />} />
}