import React, { useState } from "react";
import { FloatingLabelTextInput } from "../../components/organisms/floating-label-text-input";
import { Button } from "../../components/atoms/button";
import styled from "styled-components";

export const AddUsername = ({ onAddUsername, value, onChange, gameState }) => {
  const [error, setError] = useState();

  const onSubmit = () => {
    if (value === "") setError("username is required to play");
    else onAddUsername(value);
  };

  const isDisabled = gameState !== "none";

  return (
    <S.Container>
      <S.Text>Enter your username and join to play</S.Text>
      <FloatingLabelTextInput
        value={value}
        onChange={onChange}
        error={error}
        disabled={isDisabled}
        label="Enter your username"
      />
      <Button onClick={onSubmit} title="Join a game" disabled={isDisabled} />
    </S.Container>
  );
};

const S = {
  Container: styled.section`
    margin-block: 4rem 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
  Text: styled.div`
    font-size: 16px;
    line-height: 20px;
    font-weight: 700;
  `,
};
