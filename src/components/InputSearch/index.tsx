import { debounce } from "lodash";
import React, { useState } from "react";
import { useUsersContext } from "../../contexts/UsersContext";
import { match } from "../../utils/MatchSearch";
import {
  InputContainer,
  Input,
  IconContainer,
  ErrorSpan,
  Icon,
} from "./styles";

import searchIcon from "@assets/search.png";

export const InputSearch = () => {
  const [notFound, setNotFound] = useState(false);
  const { setUsers, usersBackup } = useUsersContext();

  function search(search: string) {
    if (search.length === 0) {
      setUsers(usersBackup);
      setNotFound(false);
      return;
    }

    var result = usersBackup.filter((item) => match(search, item));

    if (result.length !== 0) {
      setUsers(result);
      setNotFound(false);
    } else {
      setNotFound(true);
    }
  }

  const handleSearchWithDebounce = debounce((value) => search(value), 300);

  return (
    <InputContainer>
      <Input onChangeText={handleSearchWithDebounce} placeholder="Pesquisar" />
      <IconContainer>
        <Icon source={searchIcon} />
      </IconContainer>
      {notFound && <ErrorSpan>Nenhum funcionário encontrado.</ErrorSpan>}
    </InputContainer>
  );
};
