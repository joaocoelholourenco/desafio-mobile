import styled from "styled-components/native";

export const Container = styled.View`
  background: ${({ theme }) => theme.COLORS.BLACK};
  justify-content: center;
  height: 60px;
  padding: 12px 20px;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.2);
`;
