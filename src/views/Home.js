// src/views/Home.js

export function Home(props) {
    const viewEl = document.createElement('p');
    viewEl.innerHTML = "Welcome to the home page!";
    return viewEl;
  }