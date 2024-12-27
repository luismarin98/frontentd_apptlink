import { DashboardProvider } from "../../Features/Dashboard/provider"
import { PEDIDOS_VIEW } from "../../Features/Dashboard/Views/PedidosView"


export const PEDIDOS_ROUTE = () => {
    return <DashboardProvider children={<PEDIDOS_VIEW />} />
}