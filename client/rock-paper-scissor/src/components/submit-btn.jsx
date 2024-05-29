import styled from "styled-components";
import React from "react";

export const SubmitBtn = ({ onClick, title }) => (
  <S.Button onClick={onClick}>
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
    color: #3449eb;

    &:hover {
      background: #3449eb;
      color: white;
      cursor: pointer;
    }
  `,
  Text: styled.p`
    font-size: 16px;
    line-height: 20px;
    font-weight: 600;
    text-align: center;
  `,
};
