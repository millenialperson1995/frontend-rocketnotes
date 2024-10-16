import styled from "styled-components";
import backgroundImg from "../../assets/office.jpg";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;

export const Form = styled.form`
  padding: 0 136px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  > h1 {
    font-size: 48px;
    color: ${({ theme }) => theme.COLORS.ORANGE};
  }

  > h2 {
    font-size: 24px;
    margin: 48px 0;
  }

  > p {
    font-size: 14px;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  } 

  > a {
    margin-top: 84px;
    color: ${({ theme }) => theme.COLORS.ORANGE};
    text-decoration: none;
    font-size: 14px;
    font-weight: 500;
  }

  > a:hover {
    text-decoration: underline;
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${backgroundImg}) no-repeat center;
  background-size: cover;
  filter: brightness(50%);
`