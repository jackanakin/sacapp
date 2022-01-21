import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "react-native";

import theme from "../../global/theme";
import { AppScreenRoute } from "../_ts/AppScreenRoute";

import Home from "../../pages/Home/HomePage";

const App = createStackNavigator();

const AppRoutes: React.FC = () => (
  <>
    <StatusBar barStyle="dark-content" animated={true} backgroundColor={theme.statusBar.default} />

    <App.Navigator
      initialRouteName={AppScreenRoute.Home}
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: theme.page.default },
      }}
    >

      <App.Screen name={AppScreenRoute.Home} component={Home} />
    </App.Navigator>
  </>
);

export default AppRoutes;
