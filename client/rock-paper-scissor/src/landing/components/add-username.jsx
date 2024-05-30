import React, { useEffect, useState } from "react";
import { FloatingLabelTextInput } from "../../components/organisms/floating-label-text-input";
import { Button } from "../../components/atoms/button";
import styled from "styled-components";
import { useWindowDimensions } from "../../hooks/use-window-dimensions";
import { Text } from "../../components/atoms/text";

export const AddUsername = ({ onAddUsername, value, onChange, gameState }) => {
  const [error, setError] = useState();
  const { width } = useWindowDimensions();

  useEffect(() => {
    setError(undefined);
  }, [value]);

  const onSubmit = () => {
    if (value === "") setError("Please enter username");
    else onAddUsername(value);
  };

  const isDisabled = gameState !== "none";

  return (
    <S.Container>
      {width > BREAKPOINT && (
        <Text size="large" weight="strong">
          Enter your username and join to play
        </Text>
      )}
      <FloatingLabelTextInput
        value={value}
        onChange={onChange}
        error={error}
        disabled={isDisabled}
        label="Username"
      />
      <Button onClick={onSubmit} title="Join a game" disabled={isDisabled} />
    </S.Container>
  );
};

const BREAKPOINT = 650;

const S = {
  Container: styled.section`
    margin-block: 2.5rem 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (max-width: ${BREAKPOINT}px) {
      margin-block: 2rem;
    }
  `,
};
