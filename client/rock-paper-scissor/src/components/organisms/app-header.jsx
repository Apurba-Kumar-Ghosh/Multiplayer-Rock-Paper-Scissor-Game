import styled from "styled-components";
import { Colors } from "../../utils/style-helpers/color-styles";

export const AppHeader = ({ title, onClick, btnTitle }) => (
  <S.Header>
    <S.Text>{title}</S.Text>
    {btnTitle && (
      <S.ChangeAccount onClick={onClick}>{btnTitle}</S.ChangeAccount>
    )}
  </S.Header>
);

AppHeader.defaultProps = {
  title: "Rock Paper Scissor Game",
  onClick: () => window.location.reload(),
};

const S = {
  Header: styled.section`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    padding: 0 2rem;
    background: ${Colors.primary};
    justify-content: space-between;
    align-items: center;
    z-index: 2;
  `,
  Logo: styled.div`
    display: flex;
    gap: 0.3rem;
    align-items: center;
    width: 2rem;
  `,
  Text: styled.p`
    font-size: 20px;
    line-height: 26px;
    color: white;
  `,
  ChangeAccount: styled.div`
    padding: 5px 10px;
    height: 1.5rem;
    margin-right: 5rem;
    text-align: center;
    display: flex;
    align-items: center;
    border-radius: 6px;
    transition: 0.2s ease-out;
    background: white;
    border: 0.5px solid black;

    &:hover {
      cursor: pointer;
      background: ${Colors.secondary};
      color: white;
      transform: scale(1.2);
    }
  `,
};
