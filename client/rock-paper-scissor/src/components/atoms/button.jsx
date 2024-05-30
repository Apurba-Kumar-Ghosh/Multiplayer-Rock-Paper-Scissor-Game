import styled from "styled-components";
import React from "react";
import { Colors } from "../../utils/style-helpers/color-styles";
import { Text } from "./text";

export const Button = ({ onClick, title, disabled, style }) => (
  <S.Button onClick={onClick} disabled={disabled} style={{ ...style }}>
    <Text size="normal" weight="mediumStrong" lineheight={3}>
      {title}
    </Text>
  </S.Button>
);

const S = {
  Button: styled.button`
    width: 10rem;
    border-radius: 6px;
    outline: none;
    border: 0.5px solid black;
    background: transparent;
    color: ${Colors.secondary};
    transition: 0.1s ease-in;

    &:hover {
      background: ${Colors.secondary};
      color: white;
      cursor: pointer;
      transform: scale(1.1);
    }

    &:disabled {
      background: grey;

      &:hover {
        transform: none;
        cursor: not-allowed;
        color: ${Colors.secondary} !important;
      }
    }

    &:hover > span {
      color: white !important;
    }
  `,
};
