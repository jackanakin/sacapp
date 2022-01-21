import React, { useRef, useState, useEffect } from "react";
import { AppState, RefreshControl, View, AppStateStatus, Alert } from "react-native";

import AppFooter from "../../components/AppFooter";
import AppHeader from "../../components/AppHeader";
import WhatsAppButton from "../../components/WhatsAppButton";
import PhoneButton from "../../components/PhoneButton";
import LightLoadingBox from "../../components/LightLoadingBox";
import LightNetworkErrorBox from "../../components/LightNetworkErrorBox";
import LightInternalErrorBox from "../../components/LightInternalErrorBox";
import LoadingScreen from "../../components/LoadingScreen";
import {
  Container,
  ContentSafeArea,
  ContentScrollArea,
  ContactContainer,
  AppFooterStyled,
  AppHeaderStyled,
} from "./styles";
import apiErrorParser from "../../utils/apiErrorParser";
import MyValidation from "../../strings/MyValidation";
import MyError from "../../strings/MyError";
import CustomNotificationContainer from "./FeedContainers/CustomNotificationContainer";
import { useHome } from "../../providers/home";
import { useAuth } from "../../providers/auth";

interface RouteProps {
  route: {
    params?: {
      triggerRefresh?: boolean;
    };
  };
}

const HomePage: React.FC<RouteProps> = ({ route }) => {
  const appState = useRef<AppStateStatus>(AppState.currentState);
  const { signOut, user } = useAuth();

  const {
    load: fetchHomeFeed,
    customMassiveNotificationData
  } = useHome();

  const [refreshing, setRefreshing] = useState<boolean>(false);
  const [firstRender, setFirstRender] = useState<boolean>(true);
  const [cameFromSignIn, setCameFromSignIn] = useState<boolean>(true);
  const [isLoadingHome, setLoadingHome] = useState<boolean>(true);
  const [hasNetworkError, setHasNetworkError] = useState<boolean>(false);
  const [hasInternalError, setHasInternalError] = useState<boolean>(false);

  async function load() {
    if (isLoadingHome && !firstRender) return;
    if (firstRender) setFirstRender(false);

    setLoadingHome(true);
    setHasNetworkError(false);
    setHasInternalError(false);

    const feedError = await fetchHomeFeed();

    if (feedError) {
      const apiError = apiErrorParser(feedError);
      if (!apiError.isNetwork) {
        Alert.alert(apiError.isValidation ? MyValidation.defaultTitle :
          MyError.defaultTitle, apiError.error);
      }

      if (apiError.isSessionExpired) {
        signOut();
      } else if (apiError.isNetwork) {
        setHasNetworkError(true);
      } else if (!apiError.isValidation) {
        setHasInternalError(true);
      }
    }

    setLoadingHome(false);
    setCameFromSignIn(false);
  }

  const _handleAppStateChange = async (nextAppState: AppStateStatus) => {
    appState.current = nextAppState;
    if (appState.current === "active") {
      setRefreshing(true);
      await load();
      setRefreshing(false);
    }
  };

  const onRefresh = async () => {
    setRefreshing(true);
    await load();
    setRefreshing(false);
  };

  useEffect(() => {
    const subscription = AppState.addEventListener("change", _handleAppStateChange);
    load();

    return () => {
      subscription.remove();
    };
  }, [route.params?.triggerRefresh]);

  return cameFromSignIn ? (
    <LoadingScreen />
  ) : (
    <Container>
      <AppHeaderStyled>
        <AppHeader isLoading={isLoadingHome} />
      </AppHeaderStyled>
      <ContentSafeArea>
        <ContentScrollArea
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        >
          {refreshing ? (
            <View />
          ) : (
            <View>
              <ContactContainer>
                <PhoneButton />
                <WhatsAppButton text={`Olá, meu nome é ${user?.name}`} />
              </ContactContainer>

              {isLoadingHome ? (
                <LightLoadingBox />
              ) : hasNetworkError ? (
                <LightNetworkErrorBox />
              ) : hasInternalError ? (
                <LightInternalErrorBox />
              ) : (
                <>
                  {customMassiveNotificationData &&
                    <CustomNotificationContainer data={customMassiveNotificationData} />
                  }

                </>
              )}
            </View>
          )}
        </ContentScrollArea>
      </ContentSafeArea>
      <AppFooterStyled>
        <AppFooter />
      </AppFooterStyled>
    </Container>
  );
};

export default HomePage;
