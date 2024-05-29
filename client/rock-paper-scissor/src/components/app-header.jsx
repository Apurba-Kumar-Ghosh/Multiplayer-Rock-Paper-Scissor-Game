import styled from "styled-components";

export const AppHeader = () => {
  return (
    <S.Header>
      <S.Logo></S.Logo>
      <S.Text>Rock Paper Scissor Game</S.Text>
    </S.Header>
  );
};

const S = {
  Header: styled.section`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    padding: 0 2rem;
    background: #3a404d;
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
};
