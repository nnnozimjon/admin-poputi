# React TypeScript Admin Dashboard

A modern React application built with TypeScript, Mantine UI, and Feature-Sliced Design architecture.

## Features

- ⚡️ Vite + React + TypeScript
- 🎨 Mantine UI for beautiful components
- 🌙 Dark mode support
- 📱 Responsive design
- 🧩 Feature-Sliced Design architecture
- 🛣️ React Router for navigation
- 📦 TanStack Query for server state
- 🔄 Redux Toolkit for client state
- 🎭 Framer Motion for animations

## Tech Stack

- React + TypeScript
- Vite
- Mantine UI (@mantine/core, @mantine/hooks)
- React Router DOM
- TanStack Query (React Query v5+)
- Redux Toolkit
- Feature-Sliced Design (FSD) architecture

## Project Structure

```
src/
├── app/              # Entry point, providers
│   ├── providers/    # ReduxProvider, QueryClientProvider, MantineProvider
│   └── routes.tsx    # Centralized route config
├── pages/           # Route-level page components
├── widgets/         # Complex UI blocks
├── features/        # Independent business features
├── entities/        # Business domain logic
└── shared/
    ├── ui/          # Reusable UI components
    ├── lib/         # Utils, helpers, store setup
    └── config/      # Route paths, theme config
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd <project-directory>
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## Features Implemented

- Responsive layout with header and sidebar
- Dark mode toggle with Mantine UI
- User list with TanStack Query
- Contact form with validation
- 404 page with navigation
- Redux state management
- TypeScript type safety

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
# admin-poputi
