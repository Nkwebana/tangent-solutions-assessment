import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Applicants from '../pages/applicants';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Applicants />,
  },
]);

export { router };
