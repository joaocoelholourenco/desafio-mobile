import styled from "styled-components/native";

export const Container = styled.View`
  padding: 32px 16px;
`;

export const ContainerInfo = styled.View`
  flex-direction: row;
  margin-bottom: 16px;
  border-bottom-style: dashed;
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.COLORS.GRAY_00};
  justify-content: space-between;
`;
export const Title = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`;
