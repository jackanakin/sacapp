import React, { useState } from "react";
import Icon from "react-native-vector-icons/FontAwesome5";
import { useNavigation } from "@react-navigation/native";
import { verticalScale } from "../../utils/sizeMatters";

import theme from "../../global/theme";
import { getGreetings } from "../../utils/getGreetings";
import {
  Header,
  HeaderTitle,
  UserName,
  HeaderButton,
  HeaderButtonSection,
} from "./styles";
import { useAuth } from "../../providers/auth";

interface AppHeaderProps {
  isLoading: boolean;
}

const AppHeader: React.FC<AppHeaderProps> = ({ isLoading }) => {
  const navigation = useNavigation();
  const { signOut, user } = useAuth();
  const [isSigningOut, setIsSigningOut] = useState(false);

  async function dispatchSignOut() {
    if (isSigningOut) return;

    setIsSigningOut(true);
    signOut();
  }

  return (
    <Header>
      <HeaderTitle>
        <UserName>{getGreetings()} {user?.name.split(" ")[0]}</UserName>
      </HeaderTitle>

      <HeaderButtonSection>
        <HeaderButton onPress={() => false}>
          <Icon name="user" size={verticalScale(28)} color={theme.text.primaryColor} />
        </HeaderButton>
        <HeaderButton disabled={isLoading} onPress={() => dispatchSignOut()}>
          <Icon
            name="sign-out-alt"
            size={verticalScale(28)}
            color={theme.text.primaryColor}
          />
        </HeaderButton>
      </HeaderButtonSection>
    </Header>
  );
};

export default AppHeader;
