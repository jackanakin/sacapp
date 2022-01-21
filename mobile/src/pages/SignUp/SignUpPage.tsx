import React, { useEffect, useState, useCallback } from "react";
import {
  KeyboardAvoidingView, ScrollView,
  Platform, Alert, ActivityIndicator
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome5";

import { verticalScale } from "../../utils/sizeMatters";
import api from "../../services/api";
import Button from "../../components/Button";
import LightInput from "../../components/LightInput";
import {
  Container,
  BackToSignInButton,
  BackToSignInText,
} from "./styles";
import theme from "../../global/theme";
import NormalText from "../../components/Text/NormalText";
import NormalBoldText from "../../components/Text/NormalBoldText";
import { AuthScreenRoutes } from "../../routes/_ts/AuthScreenRoutes";
import { FreshStartScreenRoutes } from "../../routes/_ts/FreshStartScreenRoutes";
import { useUnAuth } from "../../providers/unauth";

const SignUpPage: React.FC = () => {
  const navigation = useNavigation();
  const { isFreshStart } = useUnAuth();

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = useCallback(async () => {
    if (loading) return;
    setLoading(true);
    try {
      const response = await api.post(`/signup`, {
        params: {
          name, email, password
        },
      });

      Alert.alert("Sucesso", "Sua conta foi ativada");
      navigation.navigate(AuthScreenRoutes.SignIn);
    } catch (error: any) {
      setLoading(false);
      const messageError =
        error &&
          error.response &&
          error.response.data &&
          error.response.data.error
          ? error.response.data.error
          : "Falha na requisição";

      Alert.alert("Erro", messageError);
    }
  }, [name, email, password]);

  useEffect(() => { }, [handleSubmit]);

  return (
    <>
      <KeyboardAvoidingView
        enabled
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{ flex: 1 }}
        >
          <Container>
            <NormalBoldText style={{ marginVertical: verticalScale(7) }}>Muito bem, vamos ativar sua conta</NormalBoldText>

            <NormalText style={{ marginVertical: verticalScale(7) }}>Informe o CPF/CNPJ do titular da conexão</NormalText>

            <LightInput
              autoCorrect={false}
              name="name"
              icon="user"
              placeholder="Nome"
              returnKeyType="send"
              value={name}
              style={{ borderColor: "red" }}
              onChangeText={setName}
            />

            <LightInput
              autoCorrect={false}
              name="email"
              icon="mail"
              placeholder="E-mail"
              returnKeyType="send"
              value={email}
              onChangeText={setEmail}
              onSubmitEditing={handleSubmit}
            />

            <LightInput
              autoCorrect={false}
              secureTextEntry
              name="password"
              icon="key"
              placeholder="Password"
              returnKeyType="send"
              value={password}
              onChangeText={setPassword}
              onSubmitEditing={handleSubmit}
            />

            <Button disabled={loading} onPress={handleSubmit}>
              {loading ? (
                <ActivityIndicator
                  size="small"
                  color={theme.text.primaryColor}
                />
              ) : (
                "CONTINUAR"
              )}
            </Button>

            <BackToSignInButton onPress={() => navigation.goBack()}>
              <Icon
                name="times"
                size={verticalScale(23)}
                color={theme.text.alternativeColor}
              />
              <BackToSignInText>CANCELAR</BackToSignInText>
            </BackToSignInButton>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
};

export default SignUpPage;
