import styled from "styled-components";

export const Container = styled.textarea`
  width: 100%;
  height: 184px;
  min-height: 184px; 
  max-height: 184px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  color: ${({ theme }) => theme.COLORS.WHITE};
  border: none;
  padding: 12px;
  resize: none;
`;