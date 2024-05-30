import React from "react";
import styled, { keyframes } from "styled-components";
import { Icon } from "../../components/icon/icon";
import { Colors } from "../../utils/style-helpers/color-styles";

export const OptionCard = ({ cardType, onClick, isChoice }) => (
  <S.Card
    className={isChoice ? "animation" : undefined}
    onClick={onClick}
    ischoice={isChoice}
  >
    <Icon
      name={cardType}
      color={isChoice ? Colors.surface : Colors.tertiary}
      size={100}
    />
  </S.Card>
);

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
    border: 1px solid ${Colors.primary};
    padding: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    background: ${({ ischoice }) =>
      ischoice ? Colors.highlight : "transparent"};

    &:hover {
      background: ${Colors.highlight};
      cursor: pointer;
    }

    &.animation {
      animation: ${bounceAnimation} 0.3s ease-out;
      animation-iteration-count: 6;
      animation-direction: alternate;
    }
  `,
};
