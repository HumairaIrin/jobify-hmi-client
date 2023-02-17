import { createBrowserRouter } from 'react-router-dom';
import Main from '../../Layouts/Main/Main';
import ErrorPage from '../../Pages/Shared/ErrorPage/ErrorPage';
import Home from '../../Pages/Home/Home/Home';
import About from '../../Pages/About/About';
import Contact from '../../Pages/Contact/Contact';
import Login from '../../Pages/Login/Login';
import SignUp from '../../Pages/SignUp/SignUp';

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
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            }
        ]
    },
    {
        path: '*',
        element: <ErrorPage></ErrorPage>
    }
])

export default router;