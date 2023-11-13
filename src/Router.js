/* eslint-disable linebreak-style */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import {
  useRoutes,
} from 'react-router-dom';
import { Navigate } from "react-router";
import TopMenu from './Components/SideMenu';
import MainApplication from './MainApplication';
import Formation from './Components/Formation';
import Home from './Components/Home';
import Experiences from './Components/Experiences';

const Router = () => {
  const routes = {
    path: '/',
    element: <TopMenu />,
    children: [
      // Default route that redirects to home
      {path: '*', element: <Navigate to='/' />},
      {path: '/', element: <MainApplication />},
      {path: '/home', element: <Home />},
      {path: '/experiences', element: <Experiences />},
      {path: '/formation', element: <Formation />},
    ],
  };

  const routing = useRoutes([routes]);

  return (
    <>{routing}</>
  );
};

export default Router;
