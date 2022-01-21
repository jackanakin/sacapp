import styled from "styled-components/native";
import { verticalScale, scale } from "../../utils/sizeMatters";
import theme from "../../global/theme";

export const FooterButtonText = styled.Text`
  font-size: ${verticalScale(9)}px;
  color: ${theme.text.alternativeColor};
  font-family: "Roboto-Black";
`;

export const FooterTextWrapper = styled.View`
  flex: 0.65;
  justify-content: flex-end;
`;

export const FooterButton = styled.TouchableOpacity`
  flex: 1;
  border-radius: ${verticalScale(12)}px;
  background: ${theme.menu.button};
  min-width: ${scale(80)}px;
  max-width: ${scale(100)}px;
  padding: ${verticalScale(11)}px;
  margin-horizontal: ${scale(7)}px;
  height: 100%;
`;

export const Container = styled.ScrollView`
  margin-horizontal: ${scale(20)}px;
`;
