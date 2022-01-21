import React from "react";
import Icon from "react-native-vector-icons/FontAwesome5";
import { useNavigation } from "@react-navigation/native";

import { verticalScale } from "../../utils/sizeMatters";
import theme from "../../global/theme";
import { Container, FooterButton, FooterButtonText, FooterTextWrapper } from "./styles";

const AppFooter: React.FC = () => {
  const navigation = useNavigation();

  return (
    <Container showsHorizontalScrollIndicator={false} horizontal={true}>
      <FooterButton
        style={{ marginLeft: 0 }}
        onPress={() => false}
      >
        <Icon style={{ flex: 0.35 }}
          name="dollar-sign"
          size={verticalScale(20)}
          color={theme.text.alternativeColor}
        />
        <FooterTextWrapper>
          <FooterButtonText>Meus Pedidos</FooterButtonText>
        </FooterTextWrapper>
      </FooterButton>
      
      <FooterButton onPress={() => false}>
        <Icon style={{ flex: 0.35 }} name="tools" size={verticalScale(20)} color={theme.text.alternativeColor} />
        <FooterTextWrapper>
          <FooterButtonText>Assistência</FooterButtonText>
        </FooterTextWrapper>
      </FooterButton>
      <FooterButton onPress={() => false}>
        <Icon style={{ flex: 0.35 }} name="clipboard" size={verticalScale(20)} color={theme.text.alternativeColor} />
        <FooterTextWrapper>
          <FooterButtonText>Protocolos</FooterButtonText>
        </FooterTextWrapper>
      </FooterButton>
      <FooterButton onPress={() => false}>
        <Icon style={{ flex: 0.35 }} name="question" size={verticalScale(20)} color={theme.text.alternativeColor} />
        <FooterTextWrapper>
          <FooterButtonText>Ajuda</FooterButtonText>
        </FooterTextWrapper>
      </FooterButton>
    </Container>
  );
};

export default AppFooter;
