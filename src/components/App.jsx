import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import MainPage from 'pages/MainPage/MainPage';
import Header from '../components/Header/Header';
import AdditionalInfoPage from 'pages/AdditionalInfoPage/AdditionalInfoPage';
import EditInfoFormPage from 'pages/EditInfoFormPage/EditInfoFormPage';

const MainPage = lazy(() => import('pages/MainPage/MainPage'));
const AdditionalInfoPage = lazy(() => import('pages/AdditionalInfoPage/AdditionalInfoPage'));
const EditInfoFormPage = lazy(() => import('pages/EditInfoFormPage/EditInfoFormPage'));

export const App = () => {
  
  return (
    <>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/:id" element={<AdditionalInfoPage />} />
          <Route path="/:id/update" element={<EditInfoFormPage />} />
          <Route path="*" element={<MainPage />} />
        </Routes>
      </Suspense>
    </>
  );
};
