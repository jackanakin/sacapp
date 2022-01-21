import React from "react";

import AuthRoutes from "./publicRoutes/auth.routes";
import FreshStartRoutes from "./publicRoutes/frashStart.routes";
import AppRoutes from "./privateRoutes/app.routes";

import LoadingScreen from "../components/LoadingScreen";
import { useAuth } from "../providers/auth";
import { useUnAuth } from "../providers/unauth";

const Routes: React.FC = () => {
  const { user, loading } = useAuth();
  const { isFreshStart, cameFromSignIn } = useUnAuth();

  if (loading) {
    return <LoadingScreen />;
  }

  return user ?
    <AppRoutes />
    : isFreshStart ? (
      <FreshStartRoutes cameFromSignIn={cameFromSignIn} />
    ) : (
      <AuthRoutes />
    );
};

export default Routes;
