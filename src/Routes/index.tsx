import { DashboardProvider } from '../Features/Dashboard/provider';
import { DASHBOARD_FEATURE } from '../Features/Dashboard';
import { StartProvider } from '../Features/InicioFeature/provider';
import { START_FEATURE } from '../Features/InicioFeature';
import { RESTORE_ACCOUNT_ROUTE } from './InicioRoutes/RestoreAcctountRoute';
import { REGISTER_ROUTE } from './InicioRoutes/RegisterRoute';
import { LOGIN_ROUTE } from './InicioRoutes/LoginRoute';
import { HOME_ROUTE } from './InicioRoutes/HomeRoute';
import { PRODUCTOS_ROUTE } from './DashboardRoutes/ProductosRoute';
import { HOME_DASH_ROUTE } from './DashboardRoutes/HomeDashRoute';
import { PEDIDO_ROUTE } from './DashboardRoutes/PedidosRoute';
import { SEN_EMAIL_RECOVER_ROUTE } from './InicioRoutes/ResetPassword';

export const DashboardRoutes = {
    ProductosRoute: () => <PRODUCTOS_ROUTE />,
    DashboardRoute: () => <DashboardProvider children={<DASHBOARD_FEATURE />} />,
    HomeDashRoute: () => <HOME_DASH_ROUTE />,
    PedidosRoute: () => <PEDIDO_ROUTE />
}

export const InicioRoutes = {
    HomeRoute: () => <HOME_ROUTE />,
    LoginRoute: () => <LOGIN_ROUTE />,
    RegisterRoute: () => <REGISTER_ROUTE />,
    InicioFeature: () => <StartProvider children={<START_FEATURE />} />,
    RestoreAccountRoute: () => <RESTORE_ACCOUNT_ROUTE />,
    SendEmailRecoverRoute: () => <SEN_EMAIL_RECOVER_ROUTE />
}