let buttons = document.querySelectorAll(".products__button");

const SUCCES_STATUS = 200;

buttons.forEach((button, i) => {
  button.addEventListener("click", (evt) => {
    evt.preventDefault();
    button.classList.add("lds-dual-ring");
    axios.get('https://reqres.in/api/products/3')
    .then(response => {
      if(response.status === SUCCES_STATUS) {
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
});
