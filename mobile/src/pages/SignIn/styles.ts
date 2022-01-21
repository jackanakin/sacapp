import styled from "styled-components/native";
import { scale, verticalScale } from "../../utils/sizeMatters";
import { getBottomSpace } from "react-native-iphone-x-helper";
import { Platform, Dimensions } from "react-native";
import theme from "../../global/theme";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const CompanyName = styled.Text`
  color: ${theme.text.alternativeColor};
  font-size: ${verticalScale(33)}px;
  font-family: "Roboto-Black";
`;

export const Background = styled.View`
  flex: 1;
  background-color: ${theme.page.signIn};
`;

export const BackgroundTopRadius = styled.View`
  position: absolute;

  height: ${windowHeight / 4.5}px;
  width: 100%;
  background-color: ${theme.page.default};
  border-radius: ${verticalScale(35)}px;
`;

export const BackgroundTop = styled.View`
  position: absolute;

  height: ${windowHeight / 7}px;
  width: 100%;
  background-color: ${theme.page.default};
`;

export const ContainerBottom = styled.View`
  flex: 0.1;
  align-items: center;
  justify-content: center;
`;

export const ContainerMiddle = styled.View`
  flex: 0.6;
  align-items: center;
  justify-content: center;
`;

export const ContainerTop = styled.View`
  flex: 0.3;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 0 ${verticalScale(30)}px
    ${Platform.OS === "android" ? verticalScale(120) : verticalScale(40)}px;
  background-color: transparent;
`;

export const CreateAccountButton = styled.TouchableOpacity`
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  padding: ${verticalScale(16)}px 0 ${verticalScale(16) + getBottomSpace()}px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const CreateAccountText = styled.Text`
  color: ${theme.text.primaryColor};
  font-size: ${verticalScale(23)}px;
  font-family: "Roboto-Black";
  margin-left: ${scale(11)}px;
`;
