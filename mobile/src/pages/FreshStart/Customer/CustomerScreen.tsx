import React from "react";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome5";

import Button from "../../../components/Button";
import OutlineButton from "../../../components/OutlineButton";
import theme from "../../../global/theme";
import { verticalScale } from "../../../utils/sizeMatters";
import {
  Container,
  Title,
  ButtonContainer,
  Content,
} from "./styles";
import { ContainerCloseButton, Header, ContainerHeader } from "../styles";
import NormalText from "../../../components/Text/NormalText";
import { FreshStartScreenRoutes } from "../../../routes/_ts/FreshStartScreenRoutes";
import { useUnAuth } from "../../../providers/unauth";

const CustomerScreen: React.FC = () => {
  const navigation = useNavigation();
  const { disableFreshStart } = useUnAuth();

  return (
    <Container>
      <Header>
        <ContainerHeader />
        <ContainerCloseButton onPress={async () => await disableFreshStart()}>
          <Icon
            name="times"
            size={verticalScale(28)}
            color={theme.text.primaryColor}
          />
        </ContainerCloseButton>
      </Header>
      <Content>
        <Title>Muito bem </Title>
        <>
          <Title>Já possui conta ?</Title>
          <NormalText style={{ textAlign: "center" }}>
            Selecione ENTRAR se você já possui conta de acesso ao aplicativo ou
            ME CADASTRAR para criar uma agora
          </NormalText>
        </>
        <ButtonContainer>
          <Button onPress={() => disableFreshStart()}>
            ENTRAR
          </Button>
          <Button
            onPress={() => navigation.navigate(FreshStartScreenRoutes.FreshStart_SignUpOne)}>
            ME CADASTRAR
          </Button>
          <OutlineButton onPress={() => navigation.goBack()}
            style={{ marginTop: verticalScale(11) }}>
            VOLTAR
          </OutlineButton>
        </ButtonContainer>
      </Content>
    </Container>
  );
};

export default CustomerScreen;
