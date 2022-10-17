import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { UserType } from "../Interfaces/Users";
import { api } from "../services/Api";
import { formatPhone } from "@utils/Format";

interface UsersProviderProps {
  children: ReactNode;
}

type UsersContextData = {
  getUsers: () => Promise<UserType[]>;
  users: UserType[];
  usersBackup: UserType[];
  setUsers: React.Dispatch<React.SetStateAction<UserType[]>>;
  loading: boolean;
};

export const UsersContext = createContext({} as UsersContextData);

const UsersProvider = ({ children }: UsersProviderProps) => {
  const [users, setUsers] = useState<UserType[]>([] as UserType[]);
  const [usersBackup, setUsersBackup] = useState<UserType[]>([] as UserType[]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    getUsers();
  }, []);

  async function getUsers() {
    setLoading(true);
    const { data } = await api.get<UserType[]>("users");

    const dataFormatted = data.map((user) => {
      const dateHireFormatted = new Date(user.date_hire).toLocaleDateString();
      const phoneFormatted = formatPhone(user.phone);
      return {
        ...user,
        dateHireFormatted,
        phoneFormatted,
      };
    });

    setUsers(dataFormatted);
    setUsersBackup(dataFormatted);

    setLoading(false);
    return users;
  }
  return (
    <UsersContext.Provider
      value={{ setUsers, users, getUsers, loading, usersBackup }}
    >
      {children}
    </UsersContext.Provider>
  );
};

const useUsersContext = () => {
  const context = useContext(UsersContext);

  return context;
};

export { useUsersContext, UsersProvider };
