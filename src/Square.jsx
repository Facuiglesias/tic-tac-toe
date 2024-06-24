export function Square({
  index,
  className,
  globalTurn,
  handleChangeTurn,
  board,
  setBoard,
  winner,
  setWinner,
}) {
  const winnersComb = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const x = (
    <svg
      width="80px"
      height="80px"
      viewBox="0 0 25.00 25.00"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      xmlnssketch="http://www.bohemiancoding.com/sketch/ns"
      fill="#ffffff"
      transform="matrix(1, 0, 0, 1, 0, 0)"
      stroke="#ffffff"
    >
      <g
        id="Page-1"
        strokeWidth="0.00025"
        fill="none"
        fillRule="evenodd"
        sketchtype="MSPage"
      >
        <g
          id="Icon-Set-Filled"
          sketchtype="MSLayerGroup"
          transform="translate(-469.000000, -1041.000000)"
          fill="#22B3E9"
        >
          <path
            d="M487.148,1053.48 L492.813,1047.82 C494.376,1046.26 494.376,1043.72 492.813,1042.16 C491.248,1040.59 488.712,1040.59 487.148,1042.16 L481.484,1047.82 L475.82,1042.16 C474.257,1040.59 471.721,1040.59 470.156,1042.16 C468.593,1043.72 468.593,1046.26 470.156,1047.82 L475.82,1053.48 L470.156,1059.15 C468.593,1060.71 468.593,1063.25 470.156,1064.81 C471.721,1066.38 474.257,1066.38 475.82,1064.81 L481.484,1059.15 L487.148,1064.81 C488.712,1066.38 491.248,1066.38 492.813,1064.81 C494.376,1063.25 494.376,1060.71 492.813,1059.15 L487.148,1053.48"
            id="cross"
            sketchtype="MSShapeGroup"
          ></path>
        </g>
      </g>
    </svg>
  );
  const o = (
    <svg
      width="100px"
      height="100px"
      viewBox="0 0 512.00 512.00"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      fill="#E96902"
      stroke="#E96902"
    >
      <g id="Page-1" strokeWidth="0.00512" fill="none" fillRule="evenodd">
        <g id="drop" fill="#E96902" transform="translate(42.666667, 42.666667)">
          <path
            d="M213.333333,3.55271368e-14 C331.15408,3.55271368e-14 426.666667,95.5125867 426.666667,213.333333 C426.666667,331.15408 331.15408,426.666667 213.333333,426.666667 C95.5125867,426.666667 3.55271368e-14,331.15408 3.55271368e-14,213.333333 C3.55271368e-14,95.5125867 95.5125867,3.55271368e-14 213.333333,3.55271368e-14 Z M213.333333,106.666667 C154.42296,106.666667 106.666667,154.42296 106.666667,213.333333 C106.666667,272.243707 154.42296,320 213.333333,320 C272.243707,320 320,272.243707 320,213.333333 C320,154.42296 272.243707,106.666667 213.333333,106.666667 Z"
            id="Combined-Shape"
          ></path>
        </g>
      </g>
    </svg>
  );

  const handleClick = () => {
    if (board[index] === null && winner == null) {
      const newBoard = [...board];
      newBoard[index] = globalTurn;
      setBoard(newBoard);
      checkWinner(newBoard);
    }
  };

  const checkWinner = (arr) => {
    for (let i = 0; i < winnersComb.length; i++) {
      const combination = winnersComb[i];
      const [a, b, c] = combination;

      if (arr[a] && arr[a] === arr[b] && arr[a] === arr[c]) {
        return setWinner(arr[a]);
      }
    }
    handleChangeTurn();
  };

  return (
    <span onClick={handleClick} className={className}>
      {board[index] == "x" ? x : board[index] == "o" ? o : null}
    </span>
  );
}
