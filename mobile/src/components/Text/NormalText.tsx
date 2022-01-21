import React from "react";
import { StyleSheet, Text } from "react-native";
import theme from "../../global/theme";
import { NormalTextProps } from "../_ts/NormalTextProps";
import { verticalScale } from "../../utils/sizeMatters";

const NormalText: React.FC<NormalTextProps> = ({ style, children, ...rest }) => (
    <Text style={[styles.container, style]}>{children}</Text>
);

const styles = StyleSheet.create({
    container: {
        fontSize: verticalScale(13),
        fontFamily: "Roboto",
        color: theme.text.alternativeColor
    }
});

export default NormalText;
