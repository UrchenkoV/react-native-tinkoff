export const getRandomCardNumber = () => {
  let cardNumber = "";

  for (let index = 0; index < 4; index++) {
    const random4DigitNumber = Math.floor(1000 + Math.random() * 9000);
    cardNumber += random4DigitNumber;

    if (index !== 3) {
      cardNumber += " ";
    }
  }
  return cardNumber;
};
