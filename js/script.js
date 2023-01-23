'use strict';

const box = document.getElementById('box'),
      btns = document.getElementsByTagName('button'),
      circles = document.getElementsByClassName('circle'),
      wrapper = document.querySelector('.wrapper'),
      hearts = wrapper.querySelectorAll('.heart'),
      oneHeart = wrapper.querySelector('.heart');

//box.style.backgroundColor = 'blue';
//box.style.width = '500px';
let num = 500;
box.style.cssText = `ackground-color: blue; width: ${num}px`;

btns[1].style.borderRadius = '100%';
circles[0].style.backgroundColor = 'red';

/*for (let i = 0; i < hearts.length; i++) {
    hearts[i].style.backgroundColor = 'blue';
}*/

hearts.forEach(item => {
    item.style.backgroundColor = 'green';
});

const div = document.createElement('div');
//const text = document.createTextNode('Hello');

div.classList.add('black');
wrapper.append(div);
// Old method:
//wrapper.appendChild(div);

//wrapper.prepend(div);

//hearts[1].before(div);
hearts[1].after(div);

//wrapper.insertBefore(div, hearts[0]);

//circles[0].remove();
//wrapper.removeChild(hearts[1]);

//hearts[0].replaceWith(circles[0]);
//wrapper.replaceChild(circles[0], hearts[0]);

div.innerHTML = "<h1>Hello World!</h1>";
div.style.width = '500px';
//div.textContent = "Hello";

div.insertAdjacentHTML('afterend', '<h2>Hello</h2>');