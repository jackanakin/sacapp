import React from "react";
import { Alert, Linking, TouchableOpacityProps } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import { verticalScale } from "../../utils/sizeMatters";
import { Container, ButtonText } from "./styles";

interface WhatsAppButtonProps extends TouchableOpacityProps {
  text?: string;
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ children, text, ...rest }) => {
  const onPress = async () => {
    const hasWhatsapp = await Linking.canOpenURL('whatsapp://send?phone=5551XXXXXX');

    if (hasWhatsapp) {
      if (text) {
        Linking.openURL(`whatsapp://send?phone=5551XXXXXXXX&text=${text}&app_absent=0`)
      } else {
        Linking.openURL("whatsapp://send?phone=5551XXXXXXXX&text&app_absent=0")
      }
    } else {
      Alert.alert("Ops", "Parece que você não tem o WhatsApp instalado neste dispositivo");
    }
  }

  return (
    <Container {...rest}
      onPress={onPress}>
      <Icon name="whatsapp" size={verticalScale(20)} color="green" />
      <ButtonText>{children ? children : "(51) XXXX-XXXX"}</ButtonText>
    </ Container>
  );
}

export default WhatsAppButton;
