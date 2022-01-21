import React from "react";
import { StyleSheet, Text, TouchableOpacityProps, View, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";

import theme from "../global/theme";
import { scale, verticalScale } from "../utils/sizeMatters";

interface ButtonProps extends TouchableOpacityProps {
  children: any;
  icon?: string;
}

const BoldButtonSecondary: React.FC<ButtonProps> = ({ style, children, icon, ...rest }) => (
  <TouchableOpacity style={[styles.container, style]} {...rest}>
    <View style={styles.iconContainer}>
      {icon && <Icon name={icon} size={verticalScale(21)} color={theme.text.alternativeColor} />}
    </View>
    <Text style={styles.textContainer}>{children}</Text>

  </TouchableOpacity>
);

export default BoldButtonSecondary;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    width: "90%",
    minHeight: verticalScale(70),
    backgroundColor: theme.page.default,
    borderRadius: verticalScale(10),
    borderWidth: verticalScale(1),
    borderColor: theme.button.secondaryColor,
    padding: verticalScale(17),
    paddingHorizontal: scale(21),
    justifyContent: "center",
    alignItems: "center"
  },
  iconContainer: {
    flex: 0.3,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  textContainer: {
    flex: 0.7,
    flexDirection: "row",
    fontFamily: "Roboto-Black",
    fontSize: verticalScale(19),
    color: theme.text.alternativeColor,
    textAlign: "center"
  }
});