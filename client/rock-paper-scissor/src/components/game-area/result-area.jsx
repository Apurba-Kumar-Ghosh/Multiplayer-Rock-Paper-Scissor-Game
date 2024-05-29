import React from "react";
import styled from "styled-components";
import { OptionCard } from "./option-card";

export const ResultArea = ({ userSelection, oppositionSelection }) => {
  return (
    <S.Section>
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
    </S.Section>
  );
};

const S = {
  Section: styled.section`
    margin-block: 3rem 0;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
  `,
  Choice: styled.div`
    display: flex;
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
};
