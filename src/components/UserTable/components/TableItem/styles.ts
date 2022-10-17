import styled from "styled-components/native";

export const Row = styled.View`
  background: ${({ theme }) => theme.COLORS.WHITE};
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.2);
  margin-bottom: 1px;
`;
export const Container = styled.View`
  height: 60px;
  margin: 0 16px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Text = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
`;
export const ImageContainer = styled.View`
  height: 34px;
  width: 34px;
  border-radius: 17px;
`;

export const IconContainer = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
`;
export const Icon = styled.Image`
  width: 32px;
  height: 32px;
`;
export const Image = styled.Image`
  width: 34px;
  height: 34px;
  border-radius: 17px;
`;
