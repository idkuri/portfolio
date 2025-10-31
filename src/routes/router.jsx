// router.js
import { createBrowserRouter } from 'react-router-dom';
import Pages from '../Pages/Pages';

export const router = createBrowserRouter([
  { path: "/", element: <Pages /> },
], { future: { v7_startTransition: true } });
