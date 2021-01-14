let buttons = document.querySelectorAll(".products__button");

for(let i = 0; i < buttons.length; i++) {
  let button = buttons[i];
  button.addEventListener("click", function (evt) {
    evt.preventDefault();
    button.classList.add("lds-dual-ring");
    fetch('https://reqres.in/api/products/3')
    .then(response => {
      if(response.ok) {
        sessionStorage.setItem(i, i);
        button.classList.remove("lds-dual-ring");
        button.textContent = "В корзине";
        button.classList.add("products__button--sold");
      } else {
        alert('Ошибка HTTP: ' + response.status);
        }
    })
  });

  for(let j = 0; j < sessionStorage.length; j++) {
    if( i == sessionStorage.key(j)) {
      button.textContent = "В корзине";
      button.classList.add("products__button--sold");
    }
  };
};
