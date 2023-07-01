import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import N1Page from './Pages/N1Page';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import N2Page from './Pages/N2Page';
import N3Page from './Pages/N3Page';
import Page1 from './Pages/Page1';
import Page2 from './Pages/Page2';
import Page3 from './Pages/Page3';
import Page4 from './Pages/Page4';
import Page5 from './Pages/Page5';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "Noticia-1",
    element: <N1Page/>,
  },
  {
    path: "Noticia-2",
    element: <N2Page/>,
  },
  {
    path: "Noticia-3",
    element: <N3Page/>,
  },
  {
    path: "Comunidad",
    element: <Page1/>,
  },
  {
    path: "2",
    element: <Page2/>,
  },
  {
    path: "3",
    element: <Page3/>,
  },
  {
    path: "4",
    element: <Page4/>,
  },
  {
    path: "5",
    element: <Page5/>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
