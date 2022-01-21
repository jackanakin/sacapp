import React from "react";
import { View, ActivityIndicator } from "react-native";
import theme from "../../global/theme";

const LoadingScreen: React.FC = () => (
  <View
    style={{
      backgroundColor: theme.pageContentColor,
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <ActivityIndicator size="large" color={theme.statusBar.default} />
  </View>
);

export default LoadingScreen;
