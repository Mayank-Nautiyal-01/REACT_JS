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

function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element:<AppLayout/>,
      errorElement:<ErrorPage/>,
      children:[
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/about",
          element: <About />
        },
        {
          path: "/movie",
          element: <Movie />,
          loader:GetApiData
        },
        {
          path: "/movie/:movieId",
          element: <MovieDetails />,
         loader:GetMovieDetails,
        },
        {
          path: "/contact",
          element: <Contact />,
          action:contactData,
        }
      ]
    },
    
  ]);

  return <RouterProvider router={router} />;
}

export default App;
