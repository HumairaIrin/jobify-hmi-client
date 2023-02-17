import { createBrowserRouter } from 'react-router-dom';
import Main from '../../Layouts/Main/Main';
import ErrorPage from '../../Pages/Shared/ErrorPage/ErrorPage';
import Home from '../../Pages/Home/Home/Home';
import About from '../../Pages/About/About';
import Contact from '../../Pages/Contact/Contact';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
        ]
    },
    {
        path: '*',
        element: <ErrorPage></ErrorPage>
    }
])

export default router;