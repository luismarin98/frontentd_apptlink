import { DashboardProvider } from "../../Features/Dashboard/provider"
import { HOMEDASH_VIEW } from "../../Features/Dashboard/Views/HomeDash"

export const HOME_DASH_ROUTE = () => {
    return <DashboardProvider children={<HOMEDASH_VIEW />} />
}