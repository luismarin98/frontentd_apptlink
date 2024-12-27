import { DashboardProvider } from "../../Features/Dashboard/provider";
import { PRODUCTOS_VIEW } from "../../Features/Dashboard/Views/ProductoView";

export const PRODUCTOS_ROUTE = () => {
    return <DashboardProvider children={<PRODUCTOS_VIEW />} />
};