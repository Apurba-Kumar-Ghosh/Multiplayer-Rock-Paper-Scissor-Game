import React from "react";
import styled from "styled-components";
import { OptionCard } from "./option-card";
import { Text } from "../../components/atoms/text";

export const ResultArea = ({ userSelection, oppositionSelection }) => (
  <S.Section>
    <S.Description>
      <Text size="large" textalign="center" weight="strong">
        {getTextToShow(userSelection, oppositionSelection)}
      </Text>
    </S.Description>
    <S.Box>
      <S.Choice>
        <Text textalign="center" weight="mediumStrong" size="medium">
          Your Choice:
        </Text>
        {userSelection && (
          <OptionCard cardType={userSelection} isChoice noAnimate />
        )}
      </S.Choice>
      <S.Choice>
        <Text textalign="center" weight="mediumStrong" size="medium">
          Opponent's Choice:
        </Text>
        {oppositionSelection && userSelection && (
          <OptionCard cardType={oppositionSelection} isChoice noAnimate />
        )}
      </S.Choice>
    </S.Box>
  </S.Section>
);

const S = {
  Section: styled.section`
    margin-block: 2rem 0;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(autfill, 1fr);
  `,
  Choice: styled.div`
    display: flex;
    min-height: 14rem;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
  `,
  Description: styled.div`
    display: flex;
    justify-content: center;
    margin-block: 2rem;
  `,
  Box: styled.div`
    display: flex;
    gap: 10rem;
    justify-content: center;

    @media (max-width: 660px) {
      flex-direction: column;
      gap: 1rem;
    }
  `,
};

const getTextToShow = (userSelection, oppositionSelection) => {
  if (!userSelection && oppositionSelection)
    return "Opponent has made his move. What about you?";

  if (!userSelection) return "Make your choice";

  if (!oppositionSelection) return "Waiting for opponent to choose.";
  if (oppositionSelection === userSelection) return "STALEMATE!!! GO AGAIN!!!";

  const userValue = subs[userSelection];
  const oppValue = subs[oppositionSelection];

  const winner = (3 + userValue - oppValue) % 3;

  if (winner === 1) return "You have won this round!!!";

  if (winner === 2) return "Alas!! You have been defeated this time around";
};

const subs = {
  rock: 0,
  paper: 1,
  scissor: 2,
};
