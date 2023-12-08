const formatAddress = (address) => {
  const addressList = address.split(",").map((el) => el.trim());

  const city = addressList[1];
  const country = addressList[2];

  return { city, country };
};

export default formatAddress;
