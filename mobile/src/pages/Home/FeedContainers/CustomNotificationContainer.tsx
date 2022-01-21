import React from "react";
import { Linking } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";

import { scale, verticalScale } from "../../../utils/sizeMatters";
import theme from "../../../global/theme";
import {
  ContentBox,
  ContentBoxHeader,
  ContentBoxBody,
} from "../styles";
import NormalBoldText from "../../../components/Text/NormalBoldText";
import NormalText from "../../../components/Text/NormalText";
import BoldButtonSecondary from "../../../components/BoldButtonSecondary";
import BigBoldText from "../../../components/Text/BigBoldText";
import CustomNotification from "../../../ts/CustomNotification";

interface CustomNotificationContainerProps {
  data: CustomNotification;
}

const CustomNotificationContainer: React.FC<CustomNotificationContainerProps> = ({ data }) => {
  return (
    <ContentBox>
      <ContentBoxHeader>
        <Icon
          name="exclamation-triangle"
          size={verticalScale(20)}
          color={theme.text.alternativeColor}
        />
        <BigBoldText style={{ marginHorizontal: scale(9) }}>
          {data.title}
        </BigBoldText>
      </ContentBoxHeader>
      <ContentBoxBody>
        <NormalBoldText>{data.subtitle}</NormalBoldText>
        <NormalText style={{ marginTop: verticalScale(7) }}>
          {data.extra}
        </NormalText>
        {data.external_url &&
          <BoldButtonSecondary onPress={() => Linking.openURL(`${data.external_url}`)} style={{ marginTop: verticalScale(14), width: "100%" }} icon="plus" >INFORMAÇÕES</BoldButtonSecondary>}
      </ContentBoxBody>
    </ContentBox>
  );
};

export default CustomNotificationContainer;
