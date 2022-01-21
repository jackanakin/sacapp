import React from "react";
import { StyleSheet, Text } from "react-native";
import theme from "../../global/theme";
import { verticalScale } from "../../utils/sizeMatters";
import { NormalTextProps } from "../_ts/NormalTextProps";

const NormalSuccessText: React.FC<NormalTextProps> = ({ children, ...rest }) => (
    <Text style={styles.container} {...rest}>{children}</Text>
);

const styles = StyleSheet.create({
    container: {
        fontSize: verticalScale(13),
        fontFamily: "Roboto",
        color: theme.text.successColor
    }
});

export default NormalSuccessText;
