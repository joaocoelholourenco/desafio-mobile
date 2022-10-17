import { Header } from "@components/Header";
import { InputSearch } from "@components/InputSearch";
import { UserTable } from "@components/UserTable";
import React from "react";
import { Text } from "react-native";
import { useUsersContext } from "../../contexts/UsersContext";
import { Container, Title } from "./styles";

export default function Employees() {
  const { users } = useUsersContext();

  return (
    <Container>
      <Header />
      <Title>Funcionários</Title>
      <InputSearch />
      {users.length !== 0 ? (
        <UserTable users={users} />
      ) : (
        <Text>Nenhum funcionários encontrado.</Text>
      )}
    </Container>
  );
}
