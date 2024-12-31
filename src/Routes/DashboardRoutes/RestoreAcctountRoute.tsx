import { StartProvider } from "../../Features/InicioFeature/provider"
import { RESTORE_ACCOUNT_VIEW } from "../../Features/InicioFeature/Views/RestoreAccount"

export const RESTORE_ACCOUNT_ROUTE = () => {
    return <StartProvider children={<RESTORE_ACCOUNT_VIEW />} />
}