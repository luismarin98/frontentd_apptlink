import { DashboardProvider } from '../Features/Dashboard/provider';
import { DASHBOARD_FEATURE } from '../Features/Dashboard';
import { StartProvider } from '../Features/InicioFeature/provider';
import { START_FEATURE } from '../Features/InicioFeature';
import { RESTORE_ACCOUNT_ROUTE } from './DashboardRoutes/RestoreAcctountRoute';
import { VERIFICATE_ROUTE } from './InicioRoutes/VerificateRoute';
import { REGISTER_ROUTE } from './InicioRoutes/RegisterRoute';
import { LOGIN_ROUTE } from './InicioRoutes/LoginRoute';
import { HOME_ROUTE } from './InicioRoutes/HomeRoute';
import { INVENTARIO_ROUTE } from './DashboardRoutes/InventarioRoute';
import { PEDIDOS_ROUTE } from './DashboardRoutes/PedidosRoute';
import { PRODUCTOS_ROUTE } from './DashboardRoutes/ProductosRoute';
import { FACTURACION_FEATURE } from './DashboardRoutes/FacturacionRoute';
import { HOME_DASH_ROUTE } from './DashboardRoutes/HomeDashRoute';

export const DashboardRoutes = {
    FacturacionRoute: () => <FACTURACION_FEATURE />,
    ProductosRoute: () => <PRODUCTOS_ROUTE />,
    PedidosRoute: () => <PEDIDOS_ROUTE />,
    DashboardRoute: () => <DashboardProvider children={<DASHBOARD_FEATURE />} />,
    InventarioRoute: () => <INVENTARIO_ROUTE />,
    HomeDashRoute: () => <HOME_DASH_ROUTE />
}

export const InicioRoutes = {
    HomeRoute: () => <HOME_ROUTE />,
    LoginRoute: () => <LOGIN_ROUTE />,
    RegisterRoute: () => <REGISTER_ROUTE />,
    VerificateRoute: () => <VERIFICATE_ROUTE />,
    InicioFeature: () => <StartProvider children={<START_FEATURE />} />,
    RestoreAccountRoute: () => <RESTORE_ACCOUNT_ROUTE />
}