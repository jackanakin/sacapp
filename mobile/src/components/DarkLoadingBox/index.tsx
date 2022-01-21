import React from "react";
import { ActivityIndicator } from "react-native";
import theme from "../../global/theme";

import { Container, Message } from "./styles";

const DarkLoadingBox: React.FC = () => (
  <Container>
    <ActivityIndicator size="large" color={theme.text.primaryColor} />
    <Message>Carregando...</Message>
  </Container>
);

export default DarkLoadingBox;
