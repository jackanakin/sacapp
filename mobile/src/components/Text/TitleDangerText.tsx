import React from "react";
import { StyleSheet, Text } from "react-native";
import theme from "../../global/theme";
import { verticalScale } from "../../utils/sizeMatters";
import { NormalTextProps } from "../_ts/NormalTextProps";

const TitleDangerText: React.FC<NormalTextProps> = ({ children, ...rest }) => (
    <Text style={styles.container} {...rest}>{children}</Text>
);

const styles = StyleSheet.create({
    container: {
        fontSize: verticalScale(19),
        fontFamily: "Roboto-Black",
        color: theme.text.dangerColor
    }
});

export default TitleDangerText;
