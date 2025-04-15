// Завдання 1
const categories = document.querySelectorAll('#categories > .item');
console.log(`У списку ${categories.length} категорії.`);

categories.forEach(category => {
  const title = category.querySelector('h2').textContent;
  const itemsCount = category.querySelectorAll('ul > li').length;
  console.log(`Категорія: ${title}`);
  console.log(`Кількість елементів: ${itemsCount}`);
});

// Завдання 2
const ingredients = [
  'Картопля',
  'Гриби',
  'Часник',
  'Помідори',
  'Зелень',
  'Приправи',
];

const ingredientsList = document.getElementById('ingredients');
const elements = ingredients.map(ingredient => {
  const li = document.createElement('li');
  li.textContent = ingredient;
  return li;
});
ingredientsList.append(...elements);

// Завдання 3
const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const gallery = document.getElementById('gallery');
const galleryMarkup = images.map(({ url, alt }) => {
  return `<li><img src="${url}" alt="${alt}" width="300"></li>`;
}).join('');
gallery.insertAdjacentHTML('beforeend', galleryMarkup);
gallery.style.display = 'flex';
gallery.style.gap = '20px';

// Завдання 4
let counterValue = 0;
const valueEl = document.getElementById('value');

const increment = () => {
  counterValue += 1;
  valueEl.textContent = counterValue;
};

const decrement = () => {
  counterValue -= 1;
  valueEl.textContent = counterValue;
};

document.querySelector('[data-action="increment"]').addEventListener('click', increment);
document.querySelector('[data-action="decrement"]').addEventListener('click', decrement);