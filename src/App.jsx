import { Route, Routes } from 'react-router-dom';
import SharedLayout from 'components/SharedLayout/SharedLayout';
import FirstPage from 'pages/FirstPage/FirstPage';
import SecondPage from 'pages/SecondPage/SecondPage';
import HalfPage from 'pages/HalfPage/HalfPage';
import ErrorPage from 'pages/ErrorPage/ErrorPage';

// import RegisterPage from './pages/AuthPage/RegisterPage';
// import LoginPage from './pages/AuthPage/LoginPage';

import { AppWrapper } from './App.styled';
// import ScreensPage from './components/ScreensPage/ScreensPage';

const test = import.meta.env.VITE_API_TEST;

function App() {
    console.log(test);
    return (
        <AppWrapper>
        <Routes>
            <Route path="/" element={<SharedLayout />}>
                {/* <Route path="/home/:boardName" element={<ScreensPage />}/> */}
                {/* <Route path="/register" element={<RegisterPage />} />
                <Route path="/login" element={<LoginPage />} /> */}
                <Route path="/first" element={<FirstPage />} />
                <Route path="/second" element={<SecondPage />}>
                    <Route path=":half" element={<HalfPage />} />
                </Route>
                <Route path="*" element={<ErrorPage />} />
            </Route>
        </Routes>
        </AppWrapper>
    );
}
export default App;



