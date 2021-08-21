import styled, { css } from 'styled-components/native';

interface ButtonProps {
  type: 'default' | 'inverse';
}

export const Container = styled.TouchableOpacity<ButtonProps>`
  border-radius: 15px;
  padding: 5px;
  justify-content: center;
  align-items: center;
  height: 60px;
  background: ${({ theme }) => theme.colors.secondary};
  flex-direction: row;

  ${({ type, disabled }) => {
    if (type === 'inverse') {
      return css`
        background: rgba(123, 147, 28, 0.1);
      `;
    }

    if (disabled) {
      return css`
        background: ${({ theme }) => theme.colors.dark};
      `;
    }

    return ``;
  }}
`;

export const Text = styled.Text<ButtonProps>`
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme, type }) =>
    type === 'inverse' ? theme.colors.secondary : theme.colors.white};
`;
