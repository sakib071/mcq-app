import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App';
import QuestionPage from './pages/QuestionPage';
import ScorePage from './pages/ScorePage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path: "/questionPage",
    element: <QuestionPage></QuestionPage>
  },
  {
    path: "/scorePage",
    element: <ScorePage></ScorePage>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
