import React from "react";
import { TouchableOpacityProps } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";

import { Container, ButtonText } from "./styles";
import { scale, verticalScale } from "../../utils/sizeMatters";
import theme from "../../global/theme";

interface ButtonProps extends TouchableOpacityProps {
  children: any;
  disabled?: boolean;
  icon?: string;
}

const Button: React.FC<ButtonProps> = ({ children, icon, ...rest }) => (
  <Container {...rest}>
    {icon && <Icon name={icon} size={verticalScale(20)} style={{ marginRight: scale(11) }} color={theme.text.primaryColor} />}
    <ButtonText>{children}</ButtonText>
  </Container>
);

export default Button;
