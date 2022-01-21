import styled from "styled-components/native";
import { Platform } from "react-native";
import theme from "../../global/theme";
import { scale, verticalScale } from "../../utils/sizeMatters";

export const Container = styled.View`
  flex: 1;
  background: ${theme.page.signIn};
`;

export const AppFooterStyled = styled.View`
  flex: 0.125;
  padding-vertical: ${verticalScale(3)}px;
  align-content: flex-end;
  background-color: ${theme.menu.secondary};;
`;

export const AppHeaderStyled = styled.View`
  flex: ${Platform.OS === "ios" ? "0.125" : "0.075"};
`;

export const ContentSafeArea = styled.SafeAreaView`
  flex: ${Platform.OS === "ios" ? "0.75" : "0.8"};
`;

export const ContactContainer = styled.View`
  padding: ${verticalScale(11)}px;
  justify-content: space-between;
  align-items: center;
`;

export const ContentScrollArea = styled.ScrollView`
  margin-top: ${verticalScale(15)}px;
  margin-horizontal: ${scale(20)}px;
`;

export const ContentBox = styled.View`
  background: ${theme.page.default};
  border-color: ${theme.menu.secondary};
  border-width: ${verticalScale(2)}px;
  border-radius: ${verticalScale(15)}px;
  width: 100%;
  margin-bottom: ${verticalScale(15)}px;
  padding: ${verticalScale(21)}px;
`;

export const ContentBoxHeader = styled.View`
  flex: 0.13;
  flex-direction: row;
  align-items: center;
  align-content: center;
  margin-bottom: ${verticalScale(15)}px;
`;

export const ContentBoxBody = styled.View`
  flex: 0.8;
  flex-direction: column;
`;

export const BillingContainer = styled.View`
  border-radius: ${verticalScale(1)}px;
  border: ${verticalScale(1)}px;
  border-color: ${theme.text.primaryColor};
  width: 98%;
  padding: ${verticalScale(7)}px;
  margin-top: ${verticalScale(7)}px;
  align-items: flex-start;
`;

export const BillingContainerFooter = styled.TouchableOpacity`
  flex-direction: row;
  border-radius: ${verticalScale(5)}px;
  border: ${verticalScale(1)}px;
  border-color: ${theme.button.primaryColor};
  background-color: ${theme.button.primaryColor};
  padding: ${verticalScale(11)}px;
  align-items: center;
  align-self: center;
  justify-content: flex-end;
`;

export const BillingContainerButton = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const BillingContainerTextWrapper = styled.View`
  flex: 0.7;
  align-items: flex-end;
`;

export const BillingContainerIconWrapper = styled.View`
  flex: 0.3;
  align-items: flex-end;
`;