import React from "react";
import Icon from "react-native-vector-icons/FontAwesome5";

import theme from "../../global/theme";
import { verticalScale } from "../../utils/sizeMatters";

import { Container, Message } from "./styles";

const LightInternalErrorBox: React.FC = () => (
  <Container>
    <>
      <Icon name="bug" size={verticalScale(20)} color={theme.text.primaryColor} />
    </>
    <Message>Erro interno</Message>
    <Message>
      Aconteceu um erro durante a sua requisição, reinicie o aplicativo e tente
      novamente
    </Message>
  </Container>
);

export default LightInternalErrorBox;
