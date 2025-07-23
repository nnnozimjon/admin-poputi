Create a full React + TypeScript project using the following stack and structure:

---

### 🔧 Tech Stack:
- React + TypeScript
- Vite
- Mantine UI (install and configure @mantine/core and @mantine/hooks)
- React Router DOM for routing
- TanStack Query (React Query v5+) for server state
- Redux Toolkit for global client state management
- Feature-Sliced Design (FSD) architecture

---

### 🗂 Folder Structure (Feature-Sliced Design):
Use the following directory organization:
src/
app/ → Entry point, providers (Redux, Mantine, Query)
providers/ → ReduxProvider, QueryClientProvider, MantineProvider
routes.tsx → Centralized route config
App.tsx → Root component with layout
pages/ → Route-level page components (Home, About, Contact)
widgets/ → Complex UI blocks composed from features/entities
features/ → Independent business features (e.g., ThemeSwitcher)
entities/ → Business domain logic (e.g., User, Article)
shared/
ui/ → Reusable UI components (e.g., Button, Modal, Card)
lib/ → Utils, helpers, queryClient, Redux store setup
config/ → Route paths, theme config, constants


---

### 💻 Core Implementation:

#### ✅ Layout:
- Create a responsive `MainLayout` using Mantine Grid components
  - `Header` with logo and navigation
  - Optional `Sidebar` (collapsible)
  - `Main` content area
  - `Footer`
- Use `useMantineColorScheme()` for a dark/light toggle
- Add a `ThemeSwitcher` feature in `features/theme-switcher`

#### 🌐 Routing:
- Use `react-router-dom` with a centralized `app/routes.tsx`
- Create three example pages: `/`, `/about`, `/contact`
- Each page should render inside the shared layout

#### 🌍 Server State (TanStack Query):
- Configure a `QueryClient` and wrap the app in `QueryClientProvider`
- Create an example query to fetch users from:
  `https://jsonplaceholder.typicode.com/users`
- Show results in `widgets/user-list/UserListWidget.tsx`

#### 🔁 Client State (Redux Toolkit):
- Setup Redux store in `shared/lib/store.ts`
- Use `@reduxjs/toolkit` with slices
- Create an example `themeSlice` or `sidebarSlice` for UI state
- Wrap the app with a `ReduxProvider` inside `app/providers`

---

### 🧩 Components:
- Create reusable UI components in `shared/ui/`: `AppButton`, `AppCard`, `AppModal`
- Use Mantine components internally (e.g., `<Button />`, `<Modal />`)

---

### ✅ Best Practices:
- Use absolute imports (e.g., `@/shared/ui`, `@/features`)
- Enable ESLint + Prettier with standard config
- Use strict TypeScript interfaces/types
- Comment sections where code organization might be unclear

---

### 🧠 Bonus (Optional):
- Add 404 page with link to homepage
- Add Redux DevTools
- Animate transitions with Framer Motion
