import { jsx as _jsx } from "react/jsx-runtime";
import { Outlet } from 'react-router-dom';
export const AuthLayout = () => {
    return (_jsx("div", { style: { minHeight: '100vh', background: 'var(--mantine-color-body)' }, children: _jsx(Outlet, {}) }));
};
