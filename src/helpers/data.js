const random = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)];
};

const discipline = () => {
  return random([
    'Juggling Clubs',
    'Hula Hooping',
    'Floorwork',
    'Aerials',
  ]);
};

const type = () => {
  return random([
    'Technical',
    'Concepts',
    'Partner',
    'Performance',

  ]);
};

const price = () => {
  return (Math.random() * 100).toFixed(2);
};

function generate(count) {
  const data = [];
  for (let i = 0; i < count; i++) {

    const currentType = type();
    const currentDiscipline = discipline();
    const currentPrice = price();

    data.push({
      name: `${currentDiscipline} ${currentType}`,
      discipline: currentDiscipline,
      type: currentType,
      price: currentPrice,
    });
  }
  return data;
}

export default generate;