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
};
