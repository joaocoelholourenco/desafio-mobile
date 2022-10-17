import React from "react";
import { View } from "react-native";
import { UserType } from "../../Interfaces/Users";
import { TableItem } from "./components/TableItem";
import { Table, TableHeader, Text, Elipse } from "./styles";

interface UserTableProps {
  users: UserType[];
}

export const UserTable: React.FC<UserTableProps> = ({ users }) => {
  return (
    <Table>
      <TableHeader>
        <Text>FOTO</Text>
        <Text>NOME</Text>
        <Elipse />
      </TableHeader>
      <View>
        {users?.map((user) => {
          return <TableItem key={user.id} user={user} />;
        })}
      </View>
    </Table>
  );
};
