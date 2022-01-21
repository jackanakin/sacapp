import React from "react";
import { StyleSheet, Text } from "react-native";
import theme from "../../global/theme";
import { NormalTextProps } from "../_ts/NormalTextProps";
import { verticalScale } from "../../utils/sizeMatters";

const NormalInfoBoldText: React.FC<NormalTextProps> = ({ style, children, ...rest }) => (
    <Text style={[styles.container, style]}>{children}</Text>
);

const styles = StyleSheet.create({
    container: {
        fontSize: verticalScale(14),
        fontFamily: "Roboto-Black",
        color: theme.text.infoColor
    }
});

export default NormalInfoBoldText;
