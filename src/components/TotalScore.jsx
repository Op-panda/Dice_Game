import styled from "styled-components";

export default function TotalScore({ score }) {
  return (
    <ScoreContainer>
      <h1>{score}</h1>
      <p>Total Score</p>
    </ScoreContainer>
  );
}

const ScoreContainer = styled.div`
  max-width: 200px;
  text-align: center;
  h1 {
    font-family: Poppins;
    font-size: 100px;
    font-weight: 500;
  }

  p {
    font-family: Poppins;
    font-size: 24px;
    font-weight: 500;
    line-height: 0px;
  }
`;
