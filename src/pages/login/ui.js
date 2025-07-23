import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { Paper, Text, TextInput, PasswordInput, Button, Center, Stack, } from '@mantine/core';
import { IconMail, IconLock } from '@tabler/icons-react';
function validateEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
}
export const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const handleLogin = (e) => {
        e.preventDefault();
        if (!validateEmail(email)) {
            setError('Please enter a valid email address');
            return;
        }
        setError('');
        // Handle login logic here
    };
    return (_jsx(Center, { style: { minHeight: '100vh' }, children: _jsxs(Paper, { radius: "xl", p: 36, shadow: "md", withBorder: true, style: { minWidth: 500, maxWidth: '90vw' }, children: [_jsx(Text, { ta: "center", fw: 700, size: "xl", mb: 4, children: "Admin Login" }), _jsx(Text, { ta: "center", c: "dimmed", size: "sm", mb: "lg", children: "Welcome back! Please login to your account" }), _jsx("form", { onSubmit: handleLogin, children: _jsxs(Stack, { gap: "xs", children: [_jsx(TextInput, { label: "Admin Email", placeholder: "Enter your email", leftSection: _jsx(IconMail, { size: 18 }), value: email, onChange: e => setEmail(e.currentTarget.value), error: error ? error : undefined, autoComplete: "email", required: true }), _jsx(PasswordInput, { label: "Password", placeholder: "Enter your password", leftSection: _jsx(IconLock, { size: 18 }), value: password, onChange: e => setPassword(e.currentTarget.value), autoComplete: "current-password", required: true }), error && (_jsx(Text, { c: "red", size: "sm", mt: -4, mb: -4, children: error })), _jsx(Button, { type: "submit", color: "teal", radius: "md", size: "md", mt: "sm", fullWidth: true, children: "Login to Dashboard" })] }) })] }) }));
};
