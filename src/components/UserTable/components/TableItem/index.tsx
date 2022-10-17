import React, { useState } from "react";
import { UserType } from "../../../../Interfaces/Users";
import { ShowMoreInformation } from "../ShowMoreInformation";
import { Image as Icon, TouchableOpacity } from "react-native";

import {
  Row,
  Container,
  Text,
  ImageContainer,
  Image,
  IconContainer,
} from "./styles";

interface TableItemProps {
  user: UserType;
}

import ChevronUp from "@assets/chevron-up.png";
import ChevronDown from "@assets/chevron-down.png";

export const TableItem: React.FC<TableItemProps> = ({ user }) => {
  const [show, setShow] = useState(false);

  const IconShow = show ? ChevronUp : ChevronDown;

  return (
    <Row>
      <Container>
        <ImageContainer>
          <Image source={{ uri: user.img_url }} />
        </ImageContainer>
        <Text>{user.name}</Text>
        <TouchableOpacity onPress={() => setShow((old) => !old)}>
          <Icon
            style={{ width: 32, height: 32, tintColor: "#5984C0" }}
            source={IconShow}
          />
        </TouchableOpacity>
      </Container>
      {show && <ShowMoreInformation user={user} />}
    </Row>
  );
};
