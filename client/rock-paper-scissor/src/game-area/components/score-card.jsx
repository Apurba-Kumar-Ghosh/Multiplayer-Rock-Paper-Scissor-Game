import styled from "styled-components";
import { Colors } from "../../utils/style-helpers/color-styles";
import { Text } from "../../components/atoms/text";

export const Scorecard = ({ user, opp, userScore, oppScore }) => {
  return (
    <S.Box>
      <S.Score>
        <Text
          size="large"
          textAlign="center"
          weight="strong"
          color={Colors.surface}
          ellipsis
        >{`${user}(You)`}</Text>
        <S.Count>
          <Text size="large" weight="strong" inline={false}>
            {userScore}
          </Text>
        </S.Count>
      </S.Score>
      <S.Score>
        <S.Count>
          <Text size="large" weight="strong" inline={false}>
            {oppScore}
          </Text>
        </S.Count>
        <Text
          size="large"
          textAlign="center"
          weight="strong"
          color={Colors.surface}
          ellipsis
        >
          {opp}
        </Text>
      </S.Score>
    </S.Box>
  );
};

const S = {
  Box: styled.div`
    display: flex;
    width: 90%;
    max-width: 600px;
    margin: 2rem auto;
    justify-content: center;
    align-items: center;
    border-radius: 6px;
    background: ${Colors.primary};
    color: ${Colors.tertiary};
    height: 3rem;
    padding: 0 1rem;

    & :last-child {
      justify-content: flex-start;
    }
  `,
  Score: styled.div`
    display: flex;
    gap: 3rem;
    align-items: center;
    flex-basis: 50%;
    max-width: 50%;
    justify-content: flex-end;

    @media (max-width: 1024px) {
      gap: 1rem;
    }
  `,
  Count: styled.div`
    text-align: center;
    background: ${Colors.tertiary};
    color: ${Colors.primary};
    padding: 0.8rem;
    border-radius: 1px;
  `,
};
