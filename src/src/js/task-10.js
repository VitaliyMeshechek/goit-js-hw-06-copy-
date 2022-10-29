const refs = {
  input: document.querySelector('input'),
  create: document.querySelector('[data-create]'),
  destroy: document.querySelector('[data-destroy]'),
  boxes: document.querySelector('#boxes'),
};

refs.create.addEventListener('click', createBoxes);
refs.destroy.addEventListener('click', onDestroy);

let size = 30;

function createBoxes() {
  const amount = refs.input.value;
  const markup = [];
  for (let i = 1; i <= amount; i += 1) {
    const div = document.createElement('div');
    div.style.width = size + 'px';
    div.style.height = size + 'px';
    div.style.backgroundColor = getRandomHexColor();
    markup.push(div);
    size += 10;
  }
  refs.boxes.append(...markup)
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

function onDestroy() {
  refs.boxes.innerHTML = "";
  size = 30;
}


