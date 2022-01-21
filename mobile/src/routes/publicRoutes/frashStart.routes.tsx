import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import theme from "../../global/theme";
import { FreshStartScreenRoutes } from "../_ts/FreshStartScreenRoutes";

import StepA from "../../pages/FreshStart/StepA";
import StepB from "../../pages/FreshStart/StepB";
import SignUpPage from "../../pages/SignUp/SignUpPage";
import CustomerScreen from "../../pages/FreshStart/Customer/CustomerScreen";

const FreshStart = createStackNavigator();

interface WelcomeRoutesProps {
  cameFromSignIn: boolean;
}

const WelcomeRoutes: React.FC<WelcomeRoutesProps> = ({ cameFromSignIn }) => (
  <FreshStart.Navigator
    initialRouteName={cameFromSignIn ? FreshStartScreenRoutes.OutsiderOne : FreshStartScreenRoutes.StepA}
    screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: theme.pageColor },
    }}
  >
    <FreshStart.Screen name={FreshStartScreenRoutes.StepA} component={StepA} />
    <FreshStart.Screen name={FreshStartScreenRoutes.StepB} component={StepB} />
    <FreshStart.Screen name={FreshStartScreenRoutes.CustomerOne} component={CustomerScreen} />

    <FreshStart.Screen name={FreshStartScreenRoutes.FreshStart_SignUpOne} component={SignUpPage} />
  </FreshStart.Navigator>
);

export default WelcomeRoutes;
