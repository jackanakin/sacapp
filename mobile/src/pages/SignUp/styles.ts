import styled from "styled-components/native";
import { scale, verticalScale } from "../../utils/sizeMatters";
import { getBottomSpace } from "react-native-iphone-x-helper";
import { Platform } from "react-native";
import theme from "../../global/theme";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background: ${theme.page.default};
  padding: 0 ${verticalScale(30)}px
    ${Platform.OS === "android" ? verticalScale(120) : verticalScale(40)}px;
`;

export const BackToSignInButton = styled.TouchableOpacity`
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  background: ${theme.page.default};
  padding: ${verticalScale(16)}px 0 ${verticalScale(16) + getBottomSpace()}px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const BackToSignInText = styled.Text`
  color: ${theme.text.alternativeColor};
  font-size: ${verticalScale(23)}px;
  font-family: "Roboto-Black";
  margin-left: ${scale(11)}px;
`;
