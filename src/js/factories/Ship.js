const Ship = ({ name, length }) => {
  const getName = () => name;

  const getLength = () => length;

  const positions = Array(length).fill(null);

  const hit = (position) => {
    positions[position] = "x";
    return positions;
  };

  const isSunk = () => !positions.includes(null);

  return {
    getLength,
    getName,
    isSunk,
    hit,
  };
};

module.exports = Ship;
