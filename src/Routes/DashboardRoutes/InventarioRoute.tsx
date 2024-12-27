import { DashboardProvider } from "../../Features/Dashboard/provider"
import { INVENTARIO_VIEW } from "../../Features/Dashboard/Views/InventarioView"

export const INVENTARIO_ROUTE = () => {
    return <DashboardProvider children={<INVENTARIO_VIEW />} />
}