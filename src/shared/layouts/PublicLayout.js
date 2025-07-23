import { jsx as _jsx } from "react/jsx-runtime";
import { Container } from '@mantine/core';
import { Outlet } from 'react-router-dom';
export const PublicLayout = () => {
    return (_jsx(Container, { size: "lg", py: "xl", children: _jsx(Outlet, {}) }));
};
