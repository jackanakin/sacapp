import styled from "styled-components/native";
import { verticalScale } from "../../utils/sizeMatters";
import theme from "../../global/theme";

export const Container = styled.TouchableOpacity`
  width: 80%;
  height: ${verticalScale(60)}px;
  background: ${theme.page.default};
  border-radius: ${verticalScale(10)}px;
  border: ${verticalScale(1)}px;
  border-color: ${theme.button.primaryColor}
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  font-family: "Roboto";
  font-size: ${verticalScale(20)}px;
  color: ${theme.text.alternativeColor};
  text-align: center;
`;
