import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import Header from '../components/Header/Header';
const MainPage = lazy(() => import('../pages/MainPage/MainPage'));
const AdditionalInfoPage = lazy(() =>
  import('../pages/AdditionalInfoPage/AdditionalInfoPage')
);
const SuperheroCreateEditPage = lazy(() =>
  import('../pages/SuperheroCreateEditPage/SuperheroCreateEditPage')
);

export const App = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/info/:id" element={<AdditionalInfoPage />} />
          <Route
            path="/info/:id/update"
            element={<SuperheroCreateEditPage />}
          />
          <Route path="*" element={<MainPage />} />
        </Routes>
      </Suspense>
    </>
  );
};


