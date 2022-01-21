import styled from "styled-components/native";
import { scale, verticalScale } from "../../utils/sizeMatters";
import theme from "../../global/theme";

export const Container = styled.TouchableOpacity`
  width: 70%;
  min-height: ${verticalScale(50)}px;
  background: ${theme.page.default};
  border-radius: ${verticalScale(10)}px;
  border: ${verticalScale(2)}px;
  border-color: ${theme.button.primaryColor};
  margin-top: ${verticalScale(11)}px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const ButtonText = styled.Text`
  font-family: "Roboto";
  font-size: ${verticalScale(20)}px;
  margin-left: ${scale(7)}px;
  color: ${theme.text.alternativeColor};
  text-align: center;
`;
