import styled from "styled-components";

export default function NumberSelector({
  setError,
  error,
  selectedNumber,
  setSelectedNumber
}) {
  const arr = [1, 2, 3, 4, 5, 6];

  const numberSelectorHandler = (value) => {
    setSelectedNumber(value);
    setError("");
  };
  return (
    <NumberSelectorContainer>
      <p className="error">{error}</p>
      <div className="flex">
        {arr.map((value, i) => (
          <Box
            isSelected={selectedNumber === value}
            onClick={() => numberSelectorHandler(value)}
            key={i}
          >
            {value}
          </Box>
        ))}
      </div>
      <p>Select Number</p>
    </NumberSelectorContainer>
  );
}

const Box = styled.div`
  height: 72px;
  width: 72px;
  font-family: Poppins;
  background-color: white;
  border: 1px solid black;
  display: grid;
  place-items: center;
  font-size: 24px;
  font-weight: 700;
  background-color: ${(props) => (props.isSelected ? "black" : "white")};
  color: ${(props) => (props.isSelected ? "white" : "black")};
`;

const NumberSelectorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  gap: 24px;

  .flex {
    display: flex;
    gap: 24px;
  }

  p {
    font-family: Poppins;
    font-size: 24px;
    font-weight: 700;
  }

  .error {
    color: red;
  }
`;
