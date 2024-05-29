import React from "react";
import styled from "styled-components";
import { OptionCard } from "./option-card";

export const ResultArea = ({ userSelection, oppositionSelection }) => {
  return (
    <S.Section>
      <S.Description>
        {getTextToShow(userSelection, oppositionSelection)}
      </S.Description>
      <S.Box>
        <S.Choice>
          <S.Text>Your Choice:</S.Text>
          {userSelection && <OptionCard cardType={userSelection} />}
        </S.Choice>

        <S.Choice>
          <S.Text>Opponents Choice:</S.Text>
          {oppositionSelection && userSelection && (
            <OptionCard cardType={oppositionSelection} />
          )}
        </S.Choice>
      </S.Box>
    </S.Section>
  );
};

const S = {
  Section: styled.section`
    margin-block: 1rem 0;
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
  Text: styled.p`
    text-align: center;
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    font-style: italics;
  `,
  Description: styled.h3`
    font-size: 18px;
    text-align: center;
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
  if (!userSelection) return "Make your choice";

  if (!oppositionSelection) return "Waiting for opponent to choose.";

  return "";
};
