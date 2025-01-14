import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import MainPage from './pages/main/Page';
import CommunityPage from './pages/community/Page';
import CorporateInfoPage from './pages/corporateInfo/Page';
import NotFoundPage from './pages/notFound/Page';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/'>
      <Route path='' element={<MainPage />} />
      <Route path='community' element={<CommunityPage />} />
      <Route path='corporateInfo' element={<CorporateInfoPage />} />
      <Route path='*' element={<NotFoundPage />} />
    </Route>
  )
);
