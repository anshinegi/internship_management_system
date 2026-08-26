# Level 2 Task 1 — React Internship Management Frontend

## Objective

Build a responsive React frontend using reusable components, state management, API integration, loading states, and responsive design.

## Project

Internship Management System

The frontend allows users to view available internship opportunities fetched dynamically from a REST API.

## Technologies Used

- React
- Vite
- JavaScript
- HTML5
- CSS3
- Fetch API
- REST API
- Node.js
- Express.js
- Git and GitHub

## Features

### Reusable Components

The application is divided into reusable React components:

- Navbar
- Hero
- InternshipCard
- InternshipList

### Dynamic Internship Data

Internship information is fetched from the backend API:

`GET http://localhost:5000/api/internships`

The API provides:

- Internship ID
- Internship title
- Company name
- Location
- Duration
- Required skills

The fetched data is stored using React state and displayed dynamically using reusable internship cards.

### State Management

React `useState` is used to manage:

- Internship data
- Loading state
- Error state

### API Integration

React's `useEffect` and Fetch API are used to retrieve internship data from the backend when the application loads.

### Loading State

A loading message is displayed while internship data is being fetched.

### Error Handling

If the backend API is unavailable or the request fails, the application displays an appropriate error message.

### Responsive Design

The interface is responsive across:

- Desktop
- Laptop
- Tablet
- Mobile devices

The internship cards use a responsive grid layout that adapts according to screen size.

## Project Structure

```text
task1/
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── InternshipCard.jsx
│   │   └── InternshipList.jsx
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── package.json
├── package-lock.json
└── vite.config.js