import { Container } from '@mantine/core'
import { Outlet } from 'react-router-dom'

export const PublicLayout = () => {
  return (
    <Container size="lg" py="xl">
      <Outlet />
    </Container>
  )
} 