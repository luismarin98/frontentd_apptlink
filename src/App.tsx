import { Route, Routes } from 'react-router-dom';
import { DashboardRoutes, InicioRoutes } from './Routes';

export const App = () => {
  return (
    <div className="bg-neutral-800 h-screen w-screen flex justify-center text-white items-center">
      <Routes>
        <Route path="/" element={<InicioRoutes.InicioFeature />} >
          <Route path='login' element={<InicioRoutes.LoginRoute />} />
          <Route path='registro' element={<InicioRoutes.RegisterRoute />} />
          <Route path='verificacion' element={<InicioRoutes.VerificateRoute />} />
          <Route path='home' element={<InicioRoutes.HomeRoute />} />
        </Route>
        <Route path="/dashboard" element={<DashboardRoutes.DashboardRoute />}>
          <Route path="pedidos" element={<DashboardRoutes.PedidosRoute />} />
          <Route path="inventario" element={<DashboardRoutes.InventarioRoute />} />
          <Route path='producto' element={<DashboardRoutes.ProductosRoute />} />
          <Route path='facturacion' element={<DashboardRoutes.FacturacionRoute />} />
        </Route>
        <Route path="*" element={<div>Not Found</div>} />
      </Routes>
    </div>
  )
}