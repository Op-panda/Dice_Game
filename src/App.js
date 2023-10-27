import styles from "./styles.css";
import { useState } from "react";
import StartGame from "./components/StartGame";
import GamePlay from "./components/GamePlay";

export default function App() {
  const [isGameStarted, setisGameStarted] = useState(false);

  const toggleGamePlay = () => {
    setisGameStarted((prev) => !prev);
  };

  return (
    <div className={styles.body}>
      {isGameStarted ? <GamePlay /> : <StartGame toggle={toggleGamePlay} />}
    </div>
  );
}
