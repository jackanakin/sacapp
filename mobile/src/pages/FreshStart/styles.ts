import { Platform } from "react-native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import styled from "styled-components/native";
import theme from "../../global/theme";
import { scale, verticalScale } from "../../utils/sizeMatters";

export const ContainerHeader = styled.View`
  padding-top: ${Platform.OS == "ios"
    ? getStatusBarHeight() + verticalScale(11)
    : 0}px;
  background: ${theme.page.default};
`;

export const ContainerCloseButton = styled.TouchableOpacity`
  padding: ${verticalScale(15)}px;
  height: ${verticalScale(60)}px;
  width: ${scale(60)}px;
`;

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  flex: 0.125;
  align-self: flex-start;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  background: ${theme.page.default};
`;
