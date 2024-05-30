import React from "react";
import styled, { keyframes } from "styled-components";
import { Icon } from "../icons/icon";

export const OptionCard = ({ cardType, onClick, isChoice }) => {
  return (
    <S.Card
      className={isChoice ? "animation" : undefined}
      onClick={onClick}
      ischoice={isChoice}
    >
      <Icon name={cardType} color={isChoice ? "#d7514d" : "black"} size={100} />
    </S.Card>
  );
};

const bounceAnimation = keyframes`
    from {
        transform: translate3d(0, 0, 0)
    }
    to {
        transform: translate3d(0, -25px, 0)
    }
`;

const S = {
  Card: styled.div`
    border: 1px solid #3a404d;
    padding: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    background: ${({ ischoice }) => (ischoice ? "aqua" : "transparent")};

    &:hover {
      background: aqua;
      cursor: pointer;
    }

    &.animation {
      animation: ${bounceAnimation} 0.3s ease-out;
      animation-iteration-count: 6;
      animation-direction: alternate;
    }
  `,
};
