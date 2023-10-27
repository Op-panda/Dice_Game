import styled from "styled-components";
import { Button } from "../styled/Button";

export default function StartGame({ toggle }) {
  return (
    <>
      <Container>
        <img src="./images/dice.svg" alt="" />
        <div className="Content">
          <h1>DICE GAME</h1>
          <Button onClick={toggle}>Play Now</Button>
        </div>
      </Container>
    </>
  );
}

const Container = styled.div`
  max-width: 1182px;
  height: 100vh;
  display: flex;
  margin: 0 auto;
  align-items: center;

  .Content h1 {
    font-size: 96px;
    font-family: Arial;
    white-space: nowrap;
  }
`;
