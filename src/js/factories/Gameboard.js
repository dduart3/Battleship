const Gameboard = () => {
  const boardCells = Array(100).fill({ hasShip: false, isHit: false });

  const missedShots = [];

  const receiveAttack = (coordinates) => {
    boardCells[coordinates].isHit = true;
  };

  return {
    receiveAttack,
  };
};

module.exports = Gameboard;
