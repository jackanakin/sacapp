import React, { forwardRef, useState, useCallback } from "react";
import { TextInputProps } from "react-native";
import theme from "../../global/theme";
import { verticalScale } from "../../utils/sizeMatters";

import { Container, TextInput, Icon } from "./styles";

interface InputProps extends TextInputProps {
  name: string;
  icon: string;
  onChangeText: (text: any) => void;
  value: string;
}

interface InputRef {
  focus(): void;
  current: object;
}

interface EndEditingEventObject {
  nativeEvent: object;
}

const Input: React.ForwardRefRenderFunction<InputRef, InputProps> = (
  { name, icon, value, ...rest },
  ref
) => {
  const [isFocused, setFocused] = useState<boolean>(false);
  const [isFilled, setFilled] = useState<boolean>(false);

  const handleInputFocus = useCallback(() => {
    setFocused(true);
  }, []);

  function handleEndEditing(e: EndEditingEventObject): void {
    setFocused(false);

    if (e.nativeEvent.text) {
      setFilled(true);
    } else {
      setFilled(false);
    }
  }

  return (
    <Container isFocused={isFocused}>
      <Icon
        name={icon}
        size={verticalScale(20)}
        color={
          isFocused || isFilled
            ? theme.text.primaryColor
            : theme.input.placeholderColor
        }
      />

      <TextInput
        onFocus={handleInputFocus}
        onEndEditing={handleEndEditing}
        ref={ref}
        value={value}
        keyboardAppearance="dark"
        placeholderTextColor={theme.input.placeholderColor}
        {...rest}
      />
    </Container>
  );
};
export default forwardRef(Input);
