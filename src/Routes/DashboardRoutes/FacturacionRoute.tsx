import { DashboardProvider } from "../../Features/Dashboard/provider"
import { FACTURACION_VIEW } from "../../Features/Dashboard/Views/FacturacionView"

export const FACTURACION_FEATURE = () => {
    return <DashboardProvider children={<FACTURACION_VIEW />} />
}