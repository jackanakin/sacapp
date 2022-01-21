import React from "react";
import { Linking, TouchableOpacityProps } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";

import { verticalScale } from "../../utils/sizeMatters";
import { Container, ButtonText } from "./styles";

const PhoneButton: React.FC<TouchableOpacityProps> = ({ children, ...rest }) => (
  <Container {...rest} onPress={() => Linking.openURL(`tel://0800 XXX XXXX`)}>
    <Icon name="phone-alt" size={verticalScale(20)} color="blue" />
    <ButtonText>0800 XXX XXXX</ButtonText>
  </Container>
);

export default PhoneButton;
