import React from "react";
import { MaterialTextInput } from "./material-text-input";
import { SubmitBtn } from "./submit-btn";
import styled from "styled-components";

export const AddUsername = ({ onSubmit, value, onChange, error }) => {
  return (
    <S.Container>
      <MaterialTextInput value={value} onChange={onChange} error={error} />
      <SubmitBtn onClick={onSubmit} title="Join a game" />
    </S.Container>
  );
};

const S = {
  Container: styled.section`
    margin-block: 10rem 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
};
