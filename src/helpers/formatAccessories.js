const formatAccessories = (accessories, functionalities) => {
  const collect = [...accessories, ...functionalities];
  return collect.reduce((acc, current) => {
    return acc.length < current.length ? acc : current;
  });
};

export default formatAccessories;
