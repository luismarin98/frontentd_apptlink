import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { LOGIN_ROUtE } from './Routes/LoginRoute';
import { INVENTARIO_ROUTE } from './Routes/InventarioRoute';
import { HOME_ROUTE } from './Routes/HomeRoute';
import { PEDIDOS_ROUTE } from './Routes/PedidosRoute';
import { DASHBOARD_FEATURE } from './Features/Dashboard';
import { PRODUCTOS_ROUTE } from './Routes/ProductosRoute';
import { FACTURACION_VIEW } from './Features/Dashboard/Views/FacturacionView';

export const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/home" element={<HOME_ROUTE />} />
        <Route path="/dashboard" element={<DASHBOARD_FEATURE />}>
          <Route path="pedidos" element={<PEDIDOS_ROUTE />} />
          <Route path="inventario" element={<INVENTARIO_ROUTE />} />
          <Route path='producto' element={<PRODUCTOS_ROUTE />} />
          <Route path='facturacion' element={<FACTURACION_VIEW />} />
        </Route>
        <Route path="/login" element={<LOGIN_ROUtE />} />
        <Route path="*" element={<div>Not Found</div>} />
      </Routes>
    </div>
  )
}