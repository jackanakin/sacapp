import styled from "styled-components/native";
import theme from "../../../global/theme";
import { verticalScale } from "../../../utils/sizeMatters";

export const Container = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background: ${theme.page.default};
`;

export const Title = styled.Text`
  font-size: ${verticalScale(20)}px;
  font-family: "Roboto-Black";
  color: ${theme.text.alternativeColor};
`;
