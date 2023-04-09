import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Routes,  Route, Router, RouterProvider, createBrowserRouter} from "react-router-dom";
// import RouterProvider from './components/RouteProvider';
import routes from './components/routes';
import Arrival from './components/Arrival';
import Departure from './components/Departure';
import Home from './components/Home';
import Admin from './components/Admin';
import Supervisor from './components/Supervisor';
import AdminMain from './components/Admin-Main';
import AdminEdit from './components/Admin-Edit-Flight-Details';
import AdminView from './components/Admin-View-Flight-Details';
import AdminInfo from './components/Admin-Information';
import SupervisorView from './components/Supervisor-Flight-Delay-Details';
import SupervisorTiming from './components/Supervisor-Flight-Timings';
import App from './App';
import EditForm from './components/EditForm';

const router = createBrowserRouter([
  {
    path: '/ad-main',
    element: <AdminMain />,
    exact: true
  },
  {
    path : '/home',
    element : <Home/>,
    exact : true
  },
  {
    path : '/arrival',
    element : <Arrival/>,
    exact : true
  },
  {
    path : '/departure',
    element : <Departure/>,
    exact : true
  },
  {
    path : '/admin',
    element : <Admin/>,
    exact : true
  },
  {
    path : '/supervisor',
    element : <Supervisor />,
    exact : true
  },
  {
    path : '/ad-edit',
    element : <AdminEdit/>,
    exact : true
  },
  {
    path : '/ad-view',
    element : < AdminView/>,
    exact : true
  },
  {
    path : '/ad-info',
    element : <AdminInfo/>,
    exact : true
  },
  {
    path : '/super-view',
    element : <SupervisorView/>,
    exact : true
  },
  {
    path : '/super-flight',
    element : <SupervisorTiming />,
    exact : true
  },
  {
    path : '/',
    element : <App />,
    exact : true
  },
  {
    path : '/edit-form',
    element : <EditForm />,
    exact : true
  }
])

const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider 
     router={router} 
      />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
