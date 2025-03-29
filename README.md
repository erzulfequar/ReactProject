# React + Vite
A React-based user management app integrating with Reqres API, featuring authentication, user listing, and management.

Features

Login with provided credentials.

User List with pagination.

Edit/Delete Users with API integration.

Error Handling and responsive UI.

Tech Stack

React.js, React Router

Axios (API requests)

Tailwind CSS / Bootstrap (styling)

Local Storage (token persistence)

Setup

Clone repo & navigate to project:

git clone <repo-link> && cd employwise-frontend

Install dependencies:

npm install

Start development server:

npm start

Open in browser:

http://localhost:3000

API Endpoints

Login: POST /api/login

Fetch Users: GET /api/users?page=1

Update User: PUT /api/users/{id}

Delete User: DELETE /api/users/{id}

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
