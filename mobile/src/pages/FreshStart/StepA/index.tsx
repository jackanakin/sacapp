import React from "react";
import { useNavigation } from "@react-navigation/native";

import Button from "../../../components/Button";

import { Container, Title } from "./styles";

const StepA: React.FC = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <Title>Boas vindas</Title>
      <Button onPress={() => navigation.navigate("StepB")}>
        CONTINUAR
      </Button>
    </Container>
  );
};

export default StepA;
