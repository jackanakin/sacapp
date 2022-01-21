import React from "react";
import Icon from "react-native-vector-icons/FontAwesome5";

import theme from "../../global/theme";
import { verticalScale } from "../../utils/sizeMatters";

import { Container, Message } from "./styles";

const DarkNetworkErrorBox: React.FC = () => (
  <Container>
    <>
      <Icon name="wifi" size={verticalScale(20)} color={theme.text.primaryColor} />
    </>
    <Message>Erro ao obter dados</Message>
    <Message>Verifique sua conexão e tente novamente</Message>
  </Container>
);

export default DarkNetworkErrorBox;
