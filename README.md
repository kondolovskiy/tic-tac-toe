# Tic Tac Toe Game

A multiplayer Tic Tac Toe game with client-server architecture.

## Project Structure

The project is organized as a monorepo with three main workspaces:
- `frontend`: Contains the client-side application
- `backend`: Contains the server-side application
- `shared`: Contains shared types and utilities used by both frontend and backend

## Prerequisites

- Node.js (v14 or higher recommended)
- Yarn package manager (v1.22 or higher)

## Getting Started

1. Clone the repository
2. Install dependencies and set up the project:

```bash
yarn bootstrap
```

3. Run the development server:

```bash
yarn dev
```

## Available Commands

- `yarn bootstrap`: Initializes the project by:
  - Copying shared files to both frontend and backend
  - Installing dependencies for all workspaces

- `yarn dev`: Starts both frontend and backend in development mode concurrently

- `yarn build`: Builds both frontend and backend for production

- `yarn test`: Runs test suites for all workspaces

- `yarn init-shared`: Copies shared files to frontend and backend directories (this is automatically run as part of bootstrap)

## Development

To start development servers:

```bash
yarn dev
```

This will start both the frontend and backend in development mode with hot-reload enabled.

## Building for Production

To create production builds:

```bash
yarn build
```

This will build both the frontend and backend for production.


## License

This project is licensed under the MIT License - see the LICENSE file for details.