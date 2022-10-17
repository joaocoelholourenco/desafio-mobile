import { UserType } from "../../../../Interfaces/Users";
import { Container, ContainerInfo, Title } from "./styles";
import { Text, View } from "react-native";
import React from "react";

interface ShowMoreInformationProps {
  user: UserType;
}

export const ShowMoreInformation: React.FC<ShowMoreInformationProps> = ({
  user,
}) => {
  return (
    <Container>
      <View>
        <ContainerInfo>
          <Title>Cargo</Title>
          <Text>{user.role}</Text>
        </ContainerInfo>
        <ContainerInfo>
          <Title>Data de admissão</Title>
          <Text>{user.dateHireFormatted}</Text>
        </ContainerInfo>
        <ContainerInfo>
          <Title>Telefone</Title>
          <Text>{user.phoneFormatted}</Text>
        </ContainerInfo>
      </View>
    </Container>
  );
};
