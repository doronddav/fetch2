let discountBtn = [];
let discountDiv = [];
let gameName = [];
let gamePrice = [];
let gameImg = [];
let buyBtn = [];
let checkBtn = [];

const clsBtn = ["btn", "btn-outline-dark", "mt-auto"];
let discountBox1 = document.querySelector(".discount1");
let discountBox3 = document.querySelector(".discount3");

// let checkBtn0 = false;
// let checkBtn1 = false;
// let checkBtn2 = false;
// let checkBtn3 = false;

for (let i = 0; i < 4; i++) {
  discountBtn[i] = document.getElementById(`checkBtn${i}`);
  discountDiv[i] = document.querySelector(`.discount${i}`);
  gameName[i] = document.getElementById(`gameName${i}`);
  gamePrice[i] = document.getElementById(`gamePrice${i}`);
  gameImg[i] = document.getElementById(`gameImg${i}`);
  buyBtn[i] = document.getElementById(`buyBtn${i}`);
}

// console.log(discountBtn);
fetch("http://localhost:3003/games")
  .then((response) => response.json())
  .then((games) => displayGames(games));

// fetch("http://localhost:3003/discount")
//   .then((res) => res.json())
//   .then((discount) => alert(discount.massage));

let displayGames = function (games) {
  for (let i = 0; i < 4; i++) {
    gameName[i].innerText = games.products[i].name;
    gamePrice[i].innerText = games.products[i].price;
    gameImg[i].src = games.products[i].img;
    gameImg[i].alt = games.products[i].name;
  }
};
// let CreatGoToCartEl = function () {
//   let GoToCartBtn = document.createElement("button");
//   GoToCartBtn.innerText = "Add to cart";
//   GoToCartBtn.classList.add(...clsBtn);
//   buyBtn[i].appendChild(GoToCartBtn);
//   checkfordata();
// };

for (let i = 0; i < 4; i++) {
  discountBtn[i].addEventListener("click", function () {
    if ((i == 1) | (i == 3)) {
      fetch("http://localhost:3003/discount")
        .then((res) => res.json())
        .then((discount) => alert(discount.massage));
      let GoToCartBtn = document.createElement("button");
      GoToCartBtn.innerText = "Add to cart";
      GoToCartBtn.classList.add(...clsBtn);
      buyBtn[i].appendChild(GoToCartBtn);
      discountBtn[i] = true;
    } else {
      let GoToCartBtn = document.createElement("button");
      GoToCartBtn.innerText = "Add to cart";
      GoToCartBtn.classList.add(...clsBtn);
      buyBtn[i].appendChild(GoToCartBtn);
    }
  });
}

// if (checkBtn1.click == true) {
//   const ReternalDiscount = document.createElement("p");
//   ReternalDiscount.setAttribute("id", "ReternalDiscount");
//   document.getElementById("ReternalDiscount");
//   ReternalDiscount.appendChild("discount1");
//   ReternalDiscount.innerText = discount.massage;
//   // } else {
// }

// function sendA() {
//   event.preventDefault();

//   let data = {
//     gameToCheck: gameToCheck,
//     gameToCheck: gameToCheck,
//   };

// console.log(discounts.massage);

// console.log(buyBtn);
// if (buyBtn[0].clicked == true) {
//   const ReternalDiscount = document.createElement("p");
//   ReternalDiscount.setAttribute("id", "ReternalDiscount");
//   document.getElementById("ReternalDiscount");
//   ReternalDiscount.appendChild("discount1");
//   ReternalDiscount.innerText = discounts.massage;
// } else {
//   alert("there is no discount for this product");
// }
// document.getElementById("submitBtn").addEventListener("click", sendA);

// fetch("http://localhost:3003/discount")
//   .then((response) => response.json())
//   .then((discount) => console.log(discount));

// function checkfordata() {
//   if (gameName.value == bookToCheck.value) {
//     alert(`the price is ${discount.Returnal}`);
//   } else {
//   }
// }
