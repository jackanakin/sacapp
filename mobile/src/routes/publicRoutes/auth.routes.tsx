import React from "react";
import { StatusBar } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import SignInPage from "../../pages/SignIn/SignInPage";
import SignUpPage from "../../pages/SignUp/SignUpPage";
import ResetPassword from "../../pages/ResetPassword";
import theme from "../../global/theme";
import { AuthScreenRoutes } from "../_ts/AuthScreenRoutes";

const Auth = createStackNavigator();

const AuthRoutes: React.FC = () => (
  <>
    <StatusBar animated={true} backgroundColor={theme.statusBar.signIn} />
    <Auth.Navigator initialRouteName={AuthScreenRoutes.SignIn} screenOptions={{ headerShown: false }}>
      <Auth.Screen name={AuthScreenRoutes.SignIn} component={SignInPage} />
      <Auth.Screen name={AuthScreenRoutes.SignUp} component={SignUpPage} />
      <Auth.Screen name={AuthScreenRoutes.ResetPassword} component={ResetPassword} />

    </Auth.Navigator>
  </>
);

export default AuthRoutes;
