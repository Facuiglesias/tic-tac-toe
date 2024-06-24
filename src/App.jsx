import { useState } from "react";
import { Square } from "./Square";
import { ModalWinner } from "./ModalWinner";
import { ModalTie } from "./ModalTie";

function App() {
  const [globalTurn, setGlobalTurn] = useState("x");

  const handleChangeTurn = () => {
    setGlobalTurn((prevGlobalTurn) => (prevGlobalTurn == "x" ? "o" : "x"));
  };

  const [board, setBoard] = useState([
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ]);
  const [winner, setWinner] = useState(null);

  const squareClasses = [
    "w-[160px] h-[160px] flex items-center justify-center",
    "w-[160px] h-[160px] flex items-center justify-center borderGradient-x",
    "w-[160px] h-[160px] flex items-center justify-center",
    "w-[160px] h-[160px] flex items-center justify-center borderGradient-y",
    "w-[160px] h-[160px] flex items-center justify-center borderGradient-full",
    "w-[160px] h-[160px] flex items-center justify-center borderGradient-y",
    "w-[160px] h-[160px] flex items-center justify-center",
    "w-[160px] h-[160px] flex items-center justify-center borderGradient-x ",
    "w-[160px] h-[160px] flex items-center justify-center",
  ];

  return (
    <>
      <main className="flex items-center justify-center h-screen w-screen bg-black">
        <section className="w-2/3 max-w-xl y h-fit bg-[#222] rounded-[110px] text-6xl font-bold flex flex-col p-12 shadow-[10px_5px_25px_0px_#E96902,-10px_-5px_25px_0px_#22B3E9]">
          <div className="w-full h-fit flex items-center justify-center col-span-3">
            <h1 className="text-white pb-8 bg-gradient__effect">TIC TAC TOE</h1>
          </div>
          <div className="w-full h-full grid grid-cols-3 place-items-center">
            {board.map((_, i) => (
              <Square
                index={i}
                key={i}
                className={squareClasses[i]}
                globalTurn={globalTurn}
                handleChangeTurn={handleChangeTurn}
                board={board}
                setBoard={setBoard}
                winner={winner}
                setWinner={setWinner}
              />
            ))}
          </div>
        </section>
        <ModalWinner
          setGlobalTurn={setGlobalTurn}
          setBoard={setBoard}
          setWinner={setWinner}
          winner={winner}
        />
        <ModalTie
          board={board}
          setGlobalTurn={setGlobalTurn}
          setBoard={setBoard}
          setWinner={setWinner}
          winner={winner}
        />
      </main>
    </>
  );
}

export default App;
