import { Platform } from "react-native";
import styled from "styled-components/native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import theme from "../../global/theme";
import { verticalScale, scale } from "../../utils/sizeMatters";

export const Header = styled.View`
  flex: 1;
  padding-horizontal: ${verticalScale(9)}px;
  padding-top: ${Platform.OS == "ios" ? getStatusBarHeight() + verticalScale(9) : 0}px;
  background: ${theme.menu.secondary};
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderTitle = styled.Text`
  flex: 0.65;
  color: ${theme.text.primaryColor};
  font-size: ${verticalScale(20)}px;
  font-family: "Roboto-Black";
  line-height: ${verticalScale(28)}px;
`;

export const UserName = styled.Text`
  color: ${theme.text.primaryColor};
  font-family: "Roboto-Black";
`;

export const HeaderButtonSection = styled.View`
  flex: 0.35;
  flex-direction: row;
`;

export const HeaderButton = styled.TouchableOpacity`
  padding-horizontal: ${verticalScale(7)}px;
  margin-left: ${scale(14)}px;
`;
