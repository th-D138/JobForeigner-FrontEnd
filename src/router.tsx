import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import MainPage from './pages/MainPage';

export const router = createBrowserRouter(
  createRoutesFromElements(<Route path='/' element={<MainPage />} />)
);
