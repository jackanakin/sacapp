import styled from "styled-components/native";
import { verticalScale } from "../../utils/sizeMatters";
import { Platform } from "react-native";
import theme from "../../global/theme";

export const Content = styled.View`
  align-items: center;
  width: 100%;
`;

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-around;
  background: ${theme.page.default};
  padding: 0 ${verticalScale(30)}px
    ${Platform.OS === "android" ? verticalScale(120) : verticalScale(40)}px;
`;