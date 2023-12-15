const ButtonHad = (onClick) => {
  const button = document.createElement('button');
  button.textContent = 'Adivina el sombrero';
  button.addEventListener('click', onClick);
  return button;
};

export default ButtonHad;
