import styled from "styled-components";

export default function RollDice({ currDice, rollDice }) {
  return (
    <DiceContainer>
      <div>
        <img src={`../images/dice_${currDice}.png`} alt="" onClick={rollDice} />
      </div>

      <p>Click on Dice to roll</p>

      {/* <button>Reset Score</button>
    <button>Show Rules</button> */}
    </DiceContainer>
  );
}

const DiceContainer = styled.div`
  margin-top: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  p {
    font-size: 24px;
    font-family: Poppins;
    font-weight: 500;
  }
`;
