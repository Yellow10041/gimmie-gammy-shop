const getRandomNumber = (min: number, max: number) => {
  let randomNumber = Math.floor(Math.random() * (max - min) + min);

  return randomNumber;
};

export default getRandomNumber;
