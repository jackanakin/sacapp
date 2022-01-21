import styled from "styled-components/native";
import theme from "../../../global/theme";
import { verticalScale } from "../../../utils/sizeMatters";

export const Container = styled.View`
  flex: 1;
`;

export const Content = styled.View`
  flex: 0.875;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background: ${theme.page.default};
  padding: ${verticalScale(15)}px;
`;

export const ButtonContainer = styled.View`
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
`;

