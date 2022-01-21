import styled, { css } from "styled-components/native";
import FeatherIcon from "react-native-vector-icons/Feather";
import theme from "../../global/theme";
import { scale, verticalScale } from "../../utils/sizeMatters";

interface ContainerProps {
  isFocused: boolean;
}

export const TextInput = styled.TextInput`
  flex: 1;
  color: ${theme.text.primaryColor};
  font-size: ${verticalScale(16)}px;
  font-family: "Roboto";
`;

export const Container = styled.View<ContainerProps>`
  width: 100%;
  height: ${verticalScale(60)}px;
  padding: 0 ${verticalScale(16)}px;
  background: ${theme.input.backgroundColor};
  border-radius: ${scale(10)}px;
  margin-bottom: ${verticalScale(11)}px;

  flex-direction: row;
  align-items: center;

  ${(props) =>
    props.isFocused &&
    css`
      border-width: ${scale(2)}px;
      border-color: ${theme.text.primaryColor};
    `}
`;

export const Icon = styled(FeatherIcon)`
  margin-right: ${scale(16)}px;
`;
