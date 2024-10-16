import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  color: ${({ theme }) => theme.COLORS.GRAY_300};
  margin-bottom: 8px;
  border-radius: 10px;
  padding: 12px;
  
  > input {
    height: 56px;
    width: 100%;
    padding: 12px;
    margin-left: 12px;
    border: 0;
    color: ${({ theme }) => theme.COLORS.WHITE};
    background: transparent;
    border: 0;
    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
  }
`;