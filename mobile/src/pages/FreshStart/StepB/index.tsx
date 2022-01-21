import React from "react";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome5";

import Button from "../../../components/Button";
import OutlineButton from "../../../components/OutlineButton";
import theme from "../../../global/theme";
import { verticalScale } from "../../../utils/sizeMatters";

import { Container, Content, ButtonContainer } from "./styles";
import { ContainerHeader, ContainerCloseButton, Header } from "../styles";
import BigBoldText from "../../../components/Text/BigBoldText";
import NormalBoldText from "../../../components/Text/NormalBoldText";
import { useUnAuth } from "../../../providers/unauth";

const StepB: React.FC = () => {
  const navigation = useNavigation();
  const { disableFreshStart } = useUnAuth();

  return (
    <Container>
      <Header>
        <ContainerHeader />
        <ContainerCloseButton onPress={() => disableFreshStart()}>
          <Icon
            name="times"
            size={verticalScale(28)}
            color={theme.text.primaryColor}
          />
        </ContainerCloseButton>
      </Header>
      <Content>
        <>
          <BigBoldText style={{ textAlign: "center" }}>Vamos lá !</BigBoldText>
          <NormalBoldText style={{ marginVertical: verticalScale(7), textAlign: "center" }}>Para continuar, selecione uma das opções abaixo</NormalBoldText>
        </>
        <ButtonContainer>
          <Button onPress={() => navigation.navigate("CustomerOne")}>
            SOU CLIENTE
          </Button>
          <OutlineButton onPress={() => false}
            style={{ marginTop: verticalScale(11) }}>
            VER PRODUTOS
          </OutlineButton>
        </ButtonContainer>
      </Content>
    </Container>
  );
};

export default StepB;
