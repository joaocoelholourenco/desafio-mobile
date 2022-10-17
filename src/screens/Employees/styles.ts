import { Platform } from "react-native";
import styled, { css } from "styled-components/native";

export const Container = styled.ScrollView`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_00};
  ${Platform.select({
    android: css`
      padding-top: 30px;
    `,
  })}
`;

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;
  padding: 20px;
  color: ${({ theme }) => theme.COLORS.BLACK}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`;
