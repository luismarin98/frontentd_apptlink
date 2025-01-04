import { Route, Routes, useNavigate } from 'react-router-dom';
import { DashboardRoutes, InicioRoutes } from './Routes';
import { UsuarioType } from './Interfaces/UsuarioRequest';
import { useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';
import { useDispatch } from 'react-redux';
import { getUsuario } from './Store/Usuario/usuario.slice';

export const App = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem('usuario');
    if (token) {
      try {
        const decoded = jwtDecode(token);
        const user = JSON.parse(decoded.sub!) as UsuarioType;
        dispatch(getUsuario(user));
        navigate(`/dashboard/${user.id}`);
      } catch (error) {
        console.error('Invalid token', error);
        navigate('/');
      }
    } else {
      navigate('/');
    }
  }, []);

  return (
    <div className="bg-neutral-800 h-screen w-screen flex justify-center text-white items-center">
      <Routes>
        <Route path="/" element={<InicioRoutes.InicioFeature />}>
          <Route path='' element={<InicioRoutes.HomeRoute />} />
          <Route path='login' element={<InicioRoutes.LoginRoute />} />
          <Route path='registro' element={<InicioRoutes.RegisterRoute />} />
          <Route path='verificacion' element={<InicioRoutes.VerificateRoute />} />
          <Route path='restore' element={<InicioRoutes.RestoreAccountRoute />} />
          <Route path="*" element={<div>Not Found</div>} />
        </Route>
        <Route path="/dashboard/:userid" element={<DashboardRoutes.DashboardRoute />}>
          <Route path='' element={<DashboardRoutes.HomeDashRoute />} />
          <Route path='producto' element={<DashboardRoutes.ProductosRoute />} />
          <Route path='facturacion' element={<DashboardRoutes.FacturacionRoute />} />
          <Route path="*" element={<div>Not Found</div>} />
        </Route>
        <Route path="*" element={<div>Not Found</div>} />
      </Routes>
    </div>
  )
}