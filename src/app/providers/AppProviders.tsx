import { MantineProvider, createTheme } from '@mantine/core'
import { Provider } from 'react-redux'
import { store } from '@/shared/lib/store'
import { AuthProvider } from './AuthProvider'

const theme = createTheme({
  primaryColor: 'blue'
})

export const AppProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider store={store}>
      <AuthProvider>
        <MantineProvider theme={theme} defaultColorScheme="light">
          {children}
        </MantineProvider>
      </AuthProvider>
    </Provider>
  )
} 