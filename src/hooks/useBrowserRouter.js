import { useContext } from 'react'
import { Navigate, createBrowserRouter} from 'react-router-dom'
import { AuthContext } from '../context/AuthProvider';
import { MainPage } from '../components/main/MainPage';
import { LoginPage } from '../components/main/LoginPage';
import { RegistrationPage } from '../components/main/RegistrationPage';
import { ResetPasswordPage } from '../components/main/ResetPaswordPage';


export const useBrowserRouter = () => {
    const [isAuthUser] = useContext(AuthContext);

    return createBrowserRouter([
        {
            path: '/',
            element: isAuthUser ? <MainPage/> : <Navigate to='/login'/>
        },
        {
            path: '/login',
            element: !isAuthUser ? <LoginPage/> : <Navigate to='/'/>
        },
        {
            path: '/register',
            element: !isAuthUser ? <RegistrationPage/> : <Navigate to='/'/>
        }, 
        {
            path: '/reset-password',
            element: !isAuthUser ? <ResetPasswordPage/> : <Navigate to='/'/>
        }
    ])
}