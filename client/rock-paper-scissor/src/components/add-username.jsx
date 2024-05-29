import React, { useState } from "react";
import { MaterialTextInput } from "./material-text-input";
import { SubmitBtn } from "./submit-btn";
import styled from "styled-components";

export const AddUsername = ({ onAddUsername, value, onChange }) => {
  const [error, setError] = useState();

  const onSubmit = () => {
    if (value === "") setError("username is required to play");
    else onAddUsername(value);
  };

  return (
    <S.Container>
      <S.Text>Enter your username and join to play</S.Text>
      <MaterialTextInput value={value} onChange={onChange} error={error} />
      <SubmitBtn onClick={onSubmit} title="Join a game" />
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
