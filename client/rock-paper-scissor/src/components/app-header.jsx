import styled from "styled-components";

export const AppHeader = () => {
  return (
    <S.Header>
      <S.Text>Rock Paper Scissor Game</S.Text>
      <S.ChangeAccount
        onClick={() => {
          window.location.reload();
        }}
      >
        Log Out
      </S.ChangeAccount>
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
    border-radius: 6px;
    transition: 0.2s ease-out;
    background: white;
    border: 0.5px solid black;

    &:hover {
      cursor: pointer;
      background: #3449eb;
      color: white;
      transform: scale(1.2);
    }
  `,
};
