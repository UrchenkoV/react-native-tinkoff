const gradiet = [
  ["#C9184A", "#590D22"],
  ["#ff5c8a", "#ff0a54"],
  ["#e85d04", "#ffba08"],
  ["#b07d62", "#774936"],
  ["#ffea00", "#ffb700"],
  ["#e01e37", "#a11d33"],
  ["#0077b6", "#90e0ef"],
  ["#c77dff", "#7b2cbf"],
  ["#ff4d6d", "#ffccd5"],
  ["#56cfe1", "#4ea8de"],
];

export const getRandomGradient = () => {
  const min = 0;
  const max = gradiet.length - 1;
  const randomNumber = Math.floor(Math.random() * (max - min) + min);

  return gradiet[randomNumber];
};
