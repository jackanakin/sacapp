import styled from "styled-components/native";
import theme from "../../../global/theme";
import { verticalScale } from "../../../utils/sizeMatters";

export const Container = styled.View`
  flex: 1;
`;

export const Content = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding: ${verticalScale(5)}px;
  background: ${theme.page.default};
`;

export const ButtonContainer = styled.View`
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
`;

export const Title = styled.Text`
  font-size: ${verticalScale(20)}px;
  font-family: "Roboto-Black";
  text-align: center;
`;
