import { useRef } from "react";

export function ModalTie({
  board,
  winner,
  setGlobalTurn,
  setBoard,
  setWinner,
}) {
  const modal = useRef(null);

  const restartGame = () => {
    setGlobalTurn("x");
    setBoard([null, null, null, null, null, null, null, null, null]);
    setWinner(null);
  };

  if (
    !winner &&
    board.every((cell) => cell !== null) &&
    modal.current != null
  ) {
    modal.current.showModal();
  } else if (
    !winner &&
    !board.every((cell) => cell !== null) &&
    modal.current != null
  ) {
    modal.current.close();
  }
  return (
    <dialog
      ref={modal}
      className="w-fit h-fit outline-0 rounded-3xl bg-[#141414] shadow-[10px_5px_25px_0px_#E96902,-10px_-5px_25px_0px_#22B3E9]"
    >
      <section className="flex flex-col gap-8 text-white justify-center items-center py-8 px-14">
        <h1 className="text-4xl font-bold">IT'S A TIE</h1>
        <button
          onClick={restartGame}
          className="font-semibold text-lg border rounded-lg p-2 hover:bg-black"
        >
          Play Again
        </button>
      </section>
    </dialog>
  );
}
