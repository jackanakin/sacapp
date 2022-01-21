import styled from "styled-components/native";
import theme from "../../global/theme";
import { verticalScale } from "../../utils/sizeMatters";

export const Container = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: ${verticalScale(20)}px;
`;

export const Message = styled.Text`
  font-family: "Roboto-Black";
  font-size: ${verticalScale(20)}px;
  margin-top: ${verticalScale(7)}px;
  color: ${theme.text.primaryColor};
`;
