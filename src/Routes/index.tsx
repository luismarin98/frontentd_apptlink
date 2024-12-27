import { DashboardProvider } from '../Features/Dashboard/provider';
import { FACTURACION_VIEW } from '../Features/Dashboard/Views/FacturacionView';
import { PRODUCTOS_VIEW } from '../Features/Dashboard/Views/ProductoView';
import { PEDIDOS_VIEW } from '../Features/Dashboard/Views/PedidosView';
import { DASHBOARD_FEATURE } from '../Features/Dashboard';
import { INVENTARIO_VIEW } from '../Features/Dashboard/Views/InventarioView';

export const DashboardRoutes = {
    FacturacionRoute: () => { return <DashboardProvider children={<FACTURACION_VIEW />} /> },
    ProductosRoute: () => { return <DashboardProvider children={<PRODUCTOS_VIEW />} /> },
    PedidosRoute: () => { return <DashboardProvider children={<PEDIDOS_VIEW />} /> },
    DashboardRoute: () => { return <DashboardProvider children={<DASHBOARD_FEATURE />} /> },
    InventarioRoute: () => { return <DashboardProvider children={<INVENTARIO_VIEW />} /> }
}

import { StartProvider } from '../Features/InicioFeature/provider';
import { HOME_VIEW } from '../Features/InicioFeature/Views/HomeView';
import { LOGIN_VIEW } from '../Features/InicioFeature/Views/LoginView';
import { REGISTER_VIEW } from '../Features/InicioFeature/Views/RegisterView';
import { VERFICATE_VIEW } from '../Features/InicioFeature/Views/VerficateView'
import { START_FEATURE } from '../Features/InicioFeature';

export const InicioRoutes = {
    HomeRoute: () => { return <StartProvider children={<HOME_VIEW />} /> },
    LoginRoute: () => { return <StartProvider children={<LOGIN_VIEW />} /> },
    RegisterRoute: () => { return <StartProvider children={<REGISTER_VIEW />} /> },
    VerificateRoute: () => { return <StartProvider children={<VERFICATE_VIEW />} /> },
    InicioFeature: () => { return <StartProvider children={<START_FEATURE />} /> }
}