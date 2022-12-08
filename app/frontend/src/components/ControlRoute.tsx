import { useEffect } from 'react';
import { useNavigate, Outlet } from 'react-router-dom';

function ControlRoute(): JSX.Element {
  const navigate = useNavigate();
  const token = JSON.parse(localStorage.getItem('user') as string).token;

  useEffect(() => {
    if (!token) navigate('/login', { replace: true });
  }, [token, navigate]);

  return token && <Outlet />
}

export default ControlRoute;
