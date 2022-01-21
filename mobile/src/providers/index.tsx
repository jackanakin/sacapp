import React from "react";

import { AuthProvider } from "./auth";
import { UnAuthProvider } from "./unauth";
import { HomeProvider } from "./home";

const AppProvider: React.FC = ({ children }) => (
  <UnAuthProvider>
    <AuthProvider>
      <HomeProvider>
        {children}
      </HomeProvider>
    </AuthProvider>
  </UnAuthProvider>
);

export default AppProvider;
