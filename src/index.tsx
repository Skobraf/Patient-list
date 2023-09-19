import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import reportWebVitals from './reportWebVitals';
import { PatientList } from './pages/PatientLIst';
import { PatientDetails } from './pages/PatientDetails';
import PatientContextProvider from './context/PatientContextProvider';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const router = createBrowserRouter([
  {
    path: "/?",
    element: <PatientList />,
  },
  {
    path: "/patient/:id",
    element: <PatientDetails />,
  },
]);
root.render(
  <React.StrictMode>
    <PatientContextProvider>
      <RouterProvider router={router} />
    </PatientContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

