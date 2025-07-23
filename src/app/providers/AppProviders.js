import { jsx as _jsx } from "react/jsx-runtime";
import { MantineProvider, createTheme } from '@mantine/core';
import { Provider } from 'react-redux';
import { store } from '@/shared/lib/store';
import { AuthProvider } from './AuthProvider';
const theme = createTheme({
    primaryColor: 'blue'
});
export const AppProviders = ({ children }) => {
    return (_jsx(Provider, { store: store, children: _jsx(AuthProvider, { children: _jsx(MantineProvider, { theme: theme, defaultColorScheme: "light", children: children }) }) }));
};
