import React from "react";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import Routes from "./routes";
import theme from "./global/theme";
import AppProvider from "./providers";

const App: React.FC = () => (
  <NavigationContainer>
    <AppProvider>
      <View style={{ flex: 1, backgroundColor: theme.page.default }}>
        <Routes />
      </View>
    </AppProvider>
  </NavigationContainer>
);

export default App;
