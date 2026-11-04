# CONSO.LOG — Multi-Functional React Application

A multi-functional web application built with React and Vite, bringing together different interactive features and practical projects in a single platform.

**Live Demo:** [https://consodotlog.vercel.app](https://consodotlog.vercel.app)

## Overview

CONSO.LOG is a personal project developed to bring together multiple applications and interactive features in one place.

Instead of developing and deploying each exercise as a separate application, I decided to integrate them into a single project. This approach allowed me to practice building a larger React application, organizing components, managing application state, implementing navigation, and integrating different libraries and services.

The application uses React Router to manage navigation between its main sections, including nested routes for the movie browsing module.

The project also represents my learning journey with React and the JavaScript ecosystem, covering several practical concepts through real implementations.

## Main Features

### 1. Home Page

The home page introduces the application and provides access to its main features.

- Interactive image carousel built with Swiper.
- Navigation menu with links to the application's sections.
- Responsive navigation menu for smaller screens.
- Dynamic content and descriptions.

### 2. Calculator

A calculator that allows users to perform basic mathematical operations.

This feature demonstrates React state management, event handling, and interactive component development.

### 3. Task Manager

A simple task management feature that allows users to:

- Add new tasks.
- Mark tasks as completed.
- Remove tasks.
- Manage task lists through React state.

### 4. Movie Browser

A movie browsing section organized into different pages:

- **Best Movies:** Displays a selection of top-rated movies.
- **Movie List:** Provides a general movie listing.
- **Movie Search:** Allows users to search for movies by title.

This module uses API integration and nested routing with React Router.

### 5. Multi-Step Evaluation Form

An interactive form divided into multiple steps, guiding users through the submission process.

The form includes:

- User information fields.
- Rating and evaluation inputs.
- Additional comments.
- A final review and confirmation step.
- WhatsApp message integration.

After completing the form, users can send the collected information through WhatsApp to the configured phone number. The message is prepared dynamically using the submitted form data.

The application also displays a confirmation modal and resets the form after the confirmation is closed.

## Responsive Design — Mobile First

The entire application is responsive and designed to provide a consistent experience across different screen sizes.

The interface follows a Mobile First approach, adapting its layout and navigation to smartphones, tablets, and desktop screens.

## Technologies Used

| Technology | Purpose |
|---|---|
| React 18 | User interface development |
| JavaScript | Application logic |
| Vite 5 | Development server and build tool |
| React Router DOM 6 | Routing and navigation |
| Material UI 5 | UI components and styling |
| Styled Components | Component-based styling |
| Emotion | Styling support for Material UI |
| Swiper 11 | Interactive carousel |
| React Icons | Icon library |
| React Calendar | Calendar component |
| CSS | Custom responsive styling |
| Vercel | Application deployment |

## Concepts and Development Practices

Throughout this project, I worked with several important React and frontend development concepts:

- Component-based architecture.
- Reusable React components.
- State management with React Hooks.
- Event handling and controlled form inputs.
- Custom Hooks.
- Client-side routing with React Router.
- Nested routes.
- API integration.
- Multi-step form workflows.
- Responsive layouts and Mobile First design.
- Git version control and branch management.

## Project Structure

The repository contains the following main directories and configuration files:

```text
conso_log-project/
├── api/
├── src/
├── .eslintrc.cjs
├── .gitignore
├── index.html
├── LICENSE
├── package.json
├── package-lock.json
├── vercel.json
├── vite.config.js
└── README.md
```

## Getting Started

To run the project locally, follow these steps.

### Prerequisites

- Node.js
- npm

### Installation

Clone the repository:

```bash
git clone https://github.com/euluisdev/conso_log-project.git
```

Navigate to the project directory:

```bash
cd conso_log-project
```

Install the dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Vite will provide a local development URL in the terminal, usually:

```text
http://localhost:5173
```

## Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Starts the development server |
| `npm run build` | Generates the production build |
| `npm run preview` | Previews the production build locally |
| `npm run lint` | Runs ESLint to check the code |

## Production Build

To generate the production build:

```bash
npm run build
```

The generated files are stored in the `dist/` directory.

To preview the production build locally:

```bash
npm run preview
```

## Deployment

The application is deployed on Vercel.

**Live Application:** [https://consodotlog.vercel.app](https://consodotlog.vercel.app)

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Author

Developed by [euluisdev](https://github.com/euluisdev).
