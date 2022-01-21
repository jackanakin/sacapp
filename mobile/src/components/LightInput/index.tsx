import React, { forwardRef, useState, useCallback } from "react";
import { StyleSheet, TextInputProps, ViewProps } from "react-native";
import theme from "../../global/theme";
import { verticalScale } from "../../utils/sizeMatters";

import { Container, TextInput as TextStyled, Icon } from "./styles";

interface InputProps extends TextInputProps {
  name: string;
  icon?: string;
  onChangeText: (text: any) => void;
  value: string;
  containerStyle?: ViewProps;
}

interface EndEditingEventObject {
  nativeEvent: {
    text: string;
  };
}

const LightInput: React.ForwardRefRenderFunction<TextInputProps, InputProps> = (
  { name, icon, containerStyle, value, ...rest },
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
    <Container style={[containerStyle?.style]} isFocused={isFocused}>
      {icon && <Icon
        name={icon}
        size={verticalScale(20)}
        color={theme.text.alternativeColor}
      />}

      <TextStyled
        onFocus={handleInputFocus}
        onEndEditing={handleEndEditing}
        ref={ref}
        value={value}
        keyboardAppearance="dark"
        placeholderTextColor={theme.text.placeholderColor}
        {...rest}
      />
    </Container>
  );
};

const placeholderStyles = StyleSheet.create({
  text: {
    fontStyle: "italic",
    fontSize: verticalScale(15)
  }
});

export default forwardRef(LightInput);
