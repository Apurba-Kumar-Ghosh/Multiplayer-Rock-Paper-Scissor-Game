import styled from "styled-components";
import React from "react";
import { Colors } from "../../utils/style-helpers/color-styles";

export const Button = ({ onClick, title, disabled, style }) => (
  <S.Button onClick={onClick} disabled={disabled} style={{ ...style }}>
    <S.Text>{title}</S.Text>
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
        color: ${Colors.secondary};
      }
    }
  `,
  Text: styled.p`
    font-size: 16px;
    line-height: 20px;
    font-weight: 600;
    text-align: center;
  `,
};
