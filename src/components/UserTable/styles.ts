import styled from "styled-components/native";

export const Table = styled.View`
  margin: 20px;
  border-radius: 4px;
`;

export const TableHeader = styled.View`
  background: ${({ theme }) => theme.COLORS.PRIMARY};
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.2);
  flex-direction: row;
  justify-content: space-between;
  padding: 0 20px;
  align-items: center;
  height: 48px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
`;

export const Text = styled.Text`
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`;
export const Elipse = styled.View`
  width: 8px;
  height: 8px;
  background: ${({ theme }) => theme.COLORS.WHITE};
  border-radius: 4px;
`;
