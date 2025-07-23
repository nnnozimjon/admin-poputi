import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Routes, Route, Navigate, Outlet } from 'react-router-dom';
import { layouts } from '@/shared/layouts/config';
import { Dashboard, DriversPage, LoginPage, PaymentsPage, RoutesPage, UsersPage } from '@/pages';
import { useAuth } from './providers/AuthProvider';
function PrivateRoute() {
    const { isAuthenticated } = useAuth();
    return isAuthenticated ? _jsx(Outlet, {}) : _jsx(Navigate, { to: "/login", replace: true });
}
function PublicRoute() {
    const { isAuthenticated } = useAuth();
    return !isAuthenticated ? _jsx(Outlet, {}) : _jsx(Navigate, { to: "/", replace: true });
}
export const AppRouter = () => {
    return (_jsxs(Routes, { children: [_jsx(Route, { element: _jsx(PrivateRoute, {}), children: _jsxs(Route, { element: _jsx(layouts.main, {}), children: [_jsx(Route, { path: "/", index: true, element: _jsx(Dashboard, {}) }), _jsx(Route, { path: "/users", element: _jsx(UsersPage, {}) }), _jsx(Route, { path: "/drivers", element: _jsx(DriversPage, {}) }), _jsx(Route, { path: "/payments", element: _jsx(PaymentsPage, {}) }), _jsx(Route, { path: "/routes", element: _jsx(RoutesPage, {}) })] }) }), _jsx(Route, { element: _jsx(PublicRoute, {}), children: _jsx(Route, { element: _jsx(layouts.auth, {}), children: _jsx(Route, { path: "/login", element: _jsx(LoginPage, {}) }) }) }), _jsx(Route, { path: "*", element: _jsx("div", { children: "Not Found" }) })] }));
};
