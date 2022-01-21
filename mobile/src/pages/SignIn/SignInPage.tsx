import React, { useEffect, useState, useRef } from "react";
import {
  KeyboardAvoidingView,
  TextInput,
  Alert,
  ActivityIndicator,
  TouchableOpacity,
  View
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import * as Yup from "yup";
import Icon from "react-native-vector-icons/FontAwesome5";

import apiErrorParser from "../../utils/apiErrorParser";
import theme from "../../global/theme";
import {
  Container,
  CreateAccountButton,
  CreateAccountText,
  Background,
  BackgroundTop,
  BackgroundTopRadius,
  ContainerTop,
  ContainerMiddle,
  ContainerBottom,
  CompanyName,
} from "./styles";
import MyValidation from "../../strings/MyValidation";
import MyError from "../../strings/MyError";
import LightInput from "../../components/LightInput";
import { AuthScreenRoutes } from "../../routes/_ts/AuthScreenRoutes";
import NormalText from "../../components/Text/NormalText";
import { verticalScale } from "../../utils/sizeMatters";
import BigBoldText from "../../components/Text/BigBoldText";
import { useUnAuth } from "../../providers/unauth";
import { useAuth } from "../../providers/auth";

const SignInPage: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const passwordRef = useRef<TextInput>();

  const navigation = useNavigation();
  const { signIn } = useAuth();
  const { email: localEmail } = useUnAuth();

  useEffect(() => {
    if (localEmail) setEmail(localEmail);
  }, [localEmail]);

  async function handleSubmit(): Promise<void> {
    if (loading) return;
    setLoading(true);

    try {
      const schema = Yup.object().shape({
        email: Yup.string()
          .required(MyValidation.signIn.email)
          .email(MyValidation.signIn.email),
        password: Yup.string().required(MyValidation.signIn.password),
      });

      await schema.validate(
        { email, password },
        {
          abortEarly: false,
        }
      );

      await signIn({
        email,
        password
      });
    } catch (error: any) {
      if (error?.response?.status === 401) {
        Alert.alert("Erro", "Falha de autenticação");
      } else {
        const apiError = apiErrorParser(error);
        Alert.alert(apiError.isValidation ? MyValidation.defaultTitle : MyError.defaultTitle, apiError.error);
      }
      
      setLoading(false);
    }
  }

  return (
    <Background>
      <BackgroundTop />
      <BackgroundTopRadius />

      <KeyboardAvoidingView
        enabled
        style={{ flex: 1 }}
      >
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{ flex: 1 }}
        >
          <Container>
            <ContainerTop>
              <CompanyName>Sac App</CompanyName>
            </ContainerTop>

            <ContainerMiddle>
              <LightInput
                containerStyle={{
                  style: {
                    borderWidth: 0
                  }
                }}
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="email-address"
                name="email"
                icon="mail"
                placeholder="E-mail ou CPF/CNJP"
                returnKeyType="send"
                value={email}
                onChangeText={setEmail}
                onSubmitEditing={() => {
                  passwordRef.current?.focus();
                }}
              />
              <LightInput
                containerStyle={{
                  style: {
                    borderWidth: 0
                  }
                }}
                ref={passwordRef}
                secureTextEntry
                name="password"
                icon="lock"
                placeholder="Senha"
                returnKeyType="send"
                value={password}
                onChangeText={setPassword}
                onSubmitEditing={handleSubmit}
              />

              <TouchableOpacity disabled={loading} style={{ marginTop: verticalScale(11) }}
                onPress={handleSubmit}
              >
                {loading ? (
                  <ActivityIndicator
                    size="small"
                    color={theme.text.primaryColor}
                  />
                ) : (
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Icon name="sign-in-alt" size={verticalScale(21)} color={theme.text.primaryColor} />
                    <BigBoldText style={{ marginLeft: verticalScale(7) }}>ENTRAR</BigBoldText>
                  </View>
                )}
              </TouchableOpacity>

              <TouchableOpacity disabled={loading} style={{ marginTop: verticalScale(21) }}
                onPress={() => navigation.navigate(AuthScreenRoutes.ResetPassword)}
              >
                <NormalText>Esqueci a senha</NormalText>
              </TouchableOpacity>
            </ContainerMiddle>

            <ContainerBottom />
            <CreateAccountButton disabled={loading}
              onPress={() => navigation.navigate(AuthScreenRoutes.SignUp)}
            >
              <CreateAccountText>Ativar conta</CreateAccountText>
            </CreateAccountButton>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>
    </Background>
  );
};

export default SignInPage;
