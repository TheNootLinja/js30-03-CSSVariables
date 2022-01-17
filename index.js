var root = document.querySelector(':root');
const inputs = document.querySelectorAll('.controls input');

function handleChange() {
  const units = this.dataset.sizing || '';
  root.style.setProperty(`--${this.name}`, `${this.value + units}`);
}

inputs.forEach((input) => input.addEventListener('change', handleChange));
inputs.forEach((input) => input.addEventListener('mousemove', handleChange));
