import styled from "styled-components/native";

export const InputContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  margin: 8px 20px 20px;
  height: 48px;

  background: ${({ theme }) => theme.COLORS.WHITE};

  border-radius: 4px;
  border: solid 1px ${({ theme }) => theme.COLORS.GRAY_10};

  padding: 0 16px;
`;

export const Input = styled.TextInput`
  flex: 1;
`;

export const IconContainer = styled.View`
  justify-content: center;
`;

export const Icon = styled.Image`
  height: 24px;
  width: 24px;
`;

export const ErrorSpan = styled.Text`
  position: absolute;
  color: red;
  margin-top: 50px;
`;
