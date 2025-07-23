import { Routes, Route, Navigate, Outlet } from 'react-router-dom'
import { layouts } from '@/shared/layouts/config'
import { Dashboard, DriversPage, LoginPage, PaymentsPage, RoutesPage, UsersPage } from '@/pages'
import { useAuth } from './providers/AuthProvider'

function PrivateRoute() {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
}

function PublicRoute() {
  const { isAuthenticated } = useAuth();
  return !isAuthenticated ? <Outlet /> : <Navigate to="/" replace />;
}

export const AppRouter = () => {
  return (
    <Routes>
      {/* Main App Routes (Private) */}
      <Route element={<PrivateRoute />}>
        <Route element={<layouts.main />}>
          <Route path="/" index={true} element={<Dashboard />} />
          <Route path="/users" element={<UsersPage />} />
          <Route path="/drivers" element={<DriversPage />} />
          <Route path="/payments" element={<PaymentsPage />} />
          <Route path="/routes" element={<RoutesPage />} />
        </Route>
      </Route>

      {/* Auth Routes (Public) */}
      <Route element={<PublicRoute />}>
        <Route element={<layouts.auth />}>
          <Route path="/login" element={<LoginPage />} />
        </Route>
      </Route>

      {/* 404 Route */}
      <Route path="*" element={<div>Not Found</div>} />
    </Routes>
  )
} 