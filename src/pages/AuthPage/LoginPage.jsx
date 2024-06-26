import { useSelector, useDispatch } from 'react-redux';
import LoginForm from '../../components/AuthForm/LoginForm';
import { NavLink, Navigate } from 'react-router-dom';
import { login } from '../../redux/auth/auth-operations';
import Loader from '../../components/Loader/Loader';

import {
    selectAuthLoading,
    selectAuthError,
    selectIsLogin
} from '../../redux/auth/auth-selectors';

// import WelcomeAuth from "../../components/Welcome/WelcomeAuth/WelcomeAuth";

// import styles from './login-page.module.css'
import styles from '../AuthPage/register-page.module.css';

const LoginPage = () => {
    const authLoading = useSelector(selectAuthLoading);
    const authError = useSelector(selectAuthError);
    const isLogin = useSelector(selectIsLogin);

    const dispatch = useDispatch();

    const handleLogin = (data) => {
        dispatch(login(data));
    };

    return (
        <div className={styles.registerWrapper}>
            <div className={styles.register}>
                {authLoading && (
                    <div className={styles.loaderWrap}>
                        <Loader />
                    </div>
                )}
                <div className={styles.blockRegister}>
                    <div className={styles.navRegister}>
                        <NavLink to="/auth/register" className={styles.linkRegister}>
                        Registration
                        </NavLink>

                        <NavLink to="/auth/login" className={styles.authActivPage}>
                        Log In
                        </NavLink>
                    </div>

                    {/* {authLoading && (
                        <p className={styles.loading}>....Login in progress</p>
                    )} */}
                    <LoginForm onSubmit={handleLogin} />
                    {isLogin ? (
                        <Navigate to="/home" />
                    ) : (
                        authError && <p className={styles.authError}>{authError}</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
