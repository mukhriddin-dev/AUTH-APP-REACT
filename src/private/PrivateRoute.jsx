import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
const PrivateRoute = ({login}) => {
   

   return (
      <>
         {
            login ? <Outlet/> : <Navigate to="/login"/>
         }
      </>
   );
};

export default PrivateRoute;