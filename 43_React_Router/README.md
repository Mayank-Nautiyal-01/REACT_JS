# React Router Guide

## Introduction to React Router
React Router is a standard routing library for React applications that enables navigation without requiring full page reloads. It allows for the creation of single-page applications (SPAs) with dynamic routing, providing a seamless user experience.

### Why Use React Router?
- Enables client-side navigation without refreshing the page.
- Helps in structuring applications with multiple pages (e.g., Home, About, Contact, etc.).
- Supports dynamic routing using URL parameters.
- Provides useful hooks and utilities for better navigation control.

## Installation
To use React Router, install it in your React project:
```sh
npm install react-router-dom
```

## Setting Up Routes
We use the `createBrowserRouter` function to define application routes. The routes are structured in a hierarchy, allowing nested components.

```jsx
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Movie from './Pages/Movie';
import Contact, { contactData } from './Pages/Contact';
import AppLayout from './components/layout/AppLayout';
import ErrorPage from './Pages/ErrorPage';
import GetApiData from './api/GetApiData';
import MovieDetails from './components/ui/MovieDetails';
import GetMovieDetails from './api/GetMovieDetails';

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />, // Root layout with common UI elements (e.g., header, footer)
    errorElement: <ErrorPage />, // Displays error page for invalid routes
    children: [
      { path: '/', element: <Home /> },
      { path: '/about', element: <About /> },
      { path: '/movie', element: <Movie />, loader: GetApiData },
      { path: '/movie/:movieId', element: <MovieDetails />, loader: GetMovieDetails },
      { path: '/contact', element: <Contact />, action: contactData },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
```

## Router Components and Hooks Explained

### 1. `<RouterProvider>`
This component is used to provide routing configuration to the entire app. It takes the router object created using `createBrowserRouter`.

### 2. `<Outlet>`
`Outlet` is used inside the parent layout (like `AppLayout`) to render child routes dynamically.

### 3. `<NavLink>`
It is a special type of link that provides styling for the active route.
```jsx
<NavLink to="/about" className={({ isActive }) => isActive ? 'text-blue-500' : 'text-gray-500'}>
  About
</NavLink>
```

### 4. `useLoaderData()`
This hook is used inside a component to access data fetched by the `loader` function.
```jsx
const moviesData = useLoaderData();
```

### 5. `useNavigate()`
It is used for programmatic navigation.
```jsx
const navigate = useNavigate();
function goBack() {
  navigate(-1); // Navigates to the previous page
}
```

### 6. `useRouteError()`
This hook is used in an error boundary to handle errors in route components.
```jsx
const error = useRouteError();
```

## Error Handling with `errorElement`
If a user navigates to an invalid URL, the `errorElement` renders a custom error page.
```jsx
const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [...]
  }
]);
```

## Dynamic Routes with URL Parameters
For displaying movie details dynamically based on `movieId` from the URL.
```jsx
const router = createBrowserRouter([
  {
    path: '/movie/:movieId',
    element: <MovieDetails />,
    loader: GetMovieDetails,
  }
]);
```

## Fetching Data with Loaders
React Router supports fetching data before rendering components using `loader` functions.

Example: Fetching movies data
```jsx
async function GetApiData() {
  try {
    const response = await fetch(`http://www.omdbapi.com/?s=Avengers&apikey=${import.meta.env.VITE_API_KEY}`);
    return await response.json();
  } catch (error) {
    console.log(error);
  }
}
```

## Submitting Form Data with `action`
Actions handle form submissions in React Router.
```jsx
export const contactData = async ({ request }) => {
  try {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    console.log(data);
    return null;
  } catch (error) {
    console.log(error);
  }
};
```

## Conclusion
- React Router helps create dynamic, single-page applications efficiently.
- It provides built-in hooks (`useLoaderData`, `useNavigate`, etc.) for fetching and managing data.
- Error handling and nested routing improve the structure of the app.
- Loaders and actions allow better data fetching and form handling.

