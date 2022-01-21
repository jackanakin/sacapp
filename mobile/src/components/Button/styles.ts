import styled from "styled-components/native";
import theme from "../../global/theme";
import { verticalScale } from "../../utils/sizeMatters";

export const Container = styled.TouchableOpacity`
  flex-direction: row;
  width: 80%;
  height: ${verticalScale(60)}px;
  background: ${theme.button.primaryColor};
  border-radius: ${verticalScale(10)}px;
  margin-top: ${verticalScale(11)}px;
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  font-family: "Roboto";
  font-size: ${verticalScale(20)}px;
  color: ${theme.button.primaryTextColor};
  text-align: center;
`;
