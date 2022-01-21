import styled from "styled-components/native";
import FeatherIcon from "react-native-vector-icons/Feather";
import theme from "../../global/theme";
import { scale, verticalScale } from "../../utils/sizeMatters";

interface ContainerProps {
  isFocused: boolean;
}

export const TextInput = styled.TextInput`
  flex: 1;
  color: ${theme.text.alternativeColor};
  font-size: ${verticalScale(16)}px;
  font-family: "Roboto";
`;

export const Container = styled.View<ContainerProps>`
  width: 100%;
  height: ${verticalScale(60)}px;
  padding: 0 ${verticalScale(11)}px;
  background: ${theme.page.default};
  border: ${verticalScale(1)}px;
  border-color: ${theme.text.alternativeColor};
  border-radius: ${verticalScale(10)}px;
  margin-bottom: ${verticalScale(11)}px;

  flex-direction: row;
  align-items: center;
`;

export const Icon = styled(FeatherIcon)`
  margin-right: ${scale(16)}px;
`;
