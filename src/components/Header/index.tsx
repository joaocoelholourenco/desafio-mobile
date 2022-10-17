import { Image } from "react-native";
import { Container } from "./styles";

import logo from "@assets/logo.png";

export const Header = () => {
  return (
    <Container>
      <Image source={logo} />
    </Container>
  );
};
