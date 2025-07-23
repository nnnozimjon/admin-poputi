import { Outlet } from 'react-router-dom';

export const AuthLayout = () => {
  return (
    <div style={{ minHeight: '100vh', background: 'var(--mantine-color-body)' }}>
        <Outlet />
    </div>
  );
}; 