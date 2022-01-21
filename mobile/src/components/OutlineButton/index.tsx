import React from "react";
import { TouchableOpacityProps } from "react-native";
import { Container, ButtonText } from "./styles";


const OutlineButton: React.FC<TouchableOpacityProps> = ({ children, style, ...rest }) => (
  <Container style={style} {...rest}>
    <ButtonText>{children}</ButtonText>
  </Container>
);

export default OutlineButton;
