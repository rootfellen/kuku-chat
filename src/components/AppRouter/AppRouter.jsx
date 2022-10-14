import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { privateRoutes, publicRoutes } from "../../routes";
import { LOGIN_ROUTE, CHAT_ROUTE } from "../../utils/consts";

const AppRouter = () => {
  const user = false;
  return (
    <>
      {user ? (
        <Routes>
          {privateRoutes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={<route.element />}
            />
          ))}
          <Route path="*" element={<Navigate to={CHAT_ROUTE} replace />} />
        </Routes>
      ) : (
        <Routes>
          {publicRoutes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={<route.element />}
            />
          ))}
          <Route path="*" element={<Navigate to={LOGIN_ROUTE} replace />} />
        </Routes>
      )}
    </>
  );
};

export default AppRouter;
