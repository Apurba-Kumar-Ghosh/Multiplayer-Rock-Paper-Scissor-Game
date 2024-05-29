import React from "react";
import { Images } from "../../utils/imageHelper";
import styled from "styled-components";

export const OptionCard = ({ cardType, onClick, isChoice }) => {
  return (
    <S.Card onClick={onClick} isChoice={isChoice}>
      <S.OptionImage src={Images[cardType]} />
    </S.Card>
  );
};

const S = {
  Card: styled.div`
    border: ${({ isChoice }) =>
      isChoice ? "1px solid #3449eb" : "1px solid grey"};
    padding: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;

    &:hover {
      background: grey;
      cursor: pointer;
    }
  `,
  OptionImage: styled.img`
    width: 100px;
    height: 100px;
  `,
};
