import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  Alert,
  ActivityIndicator,
  ScrollView
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome5";

import { verticalScale } from "../../utils/sizeMatters";
import theme from "../../global/theme";
import Button from "../../components/Button";
import LightInput from "../../components/LightInput";
import { Container, Content } from "./styles";
import apiErrorParser from "../../utils/apiErrorParser";
import MyValidation from "../../strings/MyValidation";
import MyError from "../../strings/MyError";
import { BackToSignInButton, BackToSignInText } from "../SignUp/styles";
import NormalBoldText from "../../components/Text/NormalBoldText";
import { AuthScreenRoutes } from "../../routes/_ts/AuthScreenRoutes";
import { useAuth } from "../../providers/auth";

const ResetPassword: React.FC = () => {
  const navigation = useNavigation();
  const { signOut } = useAuth();

  const [loading, setLoading] = useState<boolean>(false);

  const [email, setEmail] = useState<string>();

  async function handleSubmit() {
    if (loading) return;
    setLoading(true);

    try {
      setLoading(false);
      Alert.alert("E-mail enviado", "Verifique sua caixa de entrada");
      navigation.navigate(AuthScreenRoutes.SignIn);
    } catch (error) {
      const apiError = apiErrorParser(error);
      Alert.alert(apiError.isValidation ? MyValidation.defaultTitle :
        MyError.defaultTitle, apiError.error);
      setLoading(false);
      if (apiError.isSessionExpired) {
        signOut();
      }
    }

  }

  return (
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
          <Content>
            <NormalBoldText style={{ textAlign: "center", marginVertical: verticalScale(7) }}>
              Refazer senha de acesso ao aplicativo
            </NormalBoldText>

            <LightInput
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="email-address"
              name="email"
              icon="mail"
              placeholder="E-mail"
              returnKeyType="send"
              value={email}
              onChangeText={setEmail}
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
          </Content>

          <BackToSignInButton onPress={() => navigation.goBack()}>
            <Icon
              name="times"
              size={verticalScale(23)}
              color={theme.text.primaryColor}
            />
            <BackToSignInText>CANCELAR</BackToSignInText>
          </BackToSignInButton>
        </Container>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default ResetPassword;
