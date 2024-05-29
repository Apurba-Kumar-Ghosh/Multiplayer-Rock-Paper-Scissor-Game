import React from "react";
import styled from "styled-components";

export const MaterialTextInput = ({ value, onChange, error }) => (
  <S.Box>
    <S.Input
      value={value}
      onChange={(event) => {
        onChange(event.target.value);
      }}
      placeholder=""
    />
    <S.Label>Enter your username</S.Label>
    {error && <S.Error>*{error}</S.Error>}
  </S.Box>
);

const S = {
  Box: styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    margin-block: 2rem;
  `,
  Input: styled.input`
    background: transparent;
    width: 20rem;
    font-size: 14px;
    height: 2rem;
    padding: 0.5rem;
    border-radius: 6px;
    outline: none;
    background: #f39264;
    border: none;
    outline: none;
    color: #3a404d;
    transition: 0.2s ease-out;

    &:focus + span {
      top: 0;
      color: #3449eb;
      transform: translateY(-50%) scale(0.9) !important;
    }

    &:not(:placeholder-shown) + span {
      top: 0;
      transform: translateY(-50%) scale(0.9);
    }
    &:not(:focus)::placeholder {
      opacity: 0;
    }
  `,
  Label: styled.span`
    position: absolute;
    font-size: 1rem;
    color: #3a404d;
    top: 50%;
    left: 2%;
    transform: translateY(-50%);
    margin: 0 0.5px;
    padding: 0 0.3px;
    transition: 0.2s ease-out;
    pointer-events: none;
  `,
  Error: styled.p`
    position: absolute;
    bottom: -40px;
    color: red;
  `,
};
