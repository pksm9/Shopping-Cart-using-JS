let shop = document.getElementById("shop");

let shopItemsData = [
  {
    id: "s001",
    name: "Casual Shirt",
    price: 45,
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing.",
    img: "images/s001.jpg",
  },
  {
    id: "s002",
    name: "Casual Shirt",
    price: 45,
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing.",
    img: "images/s002.jpg",
  },
  {
    id: "s003",
    name: "Casual Shirt",
    price: 45,
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing.",
    img: "images/s003.jpg",
  },
  {
    id: "s004",
    name: "Casual Shirt",
    price: 45,
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing.",
    img: "images/s004.jpg",
  },
];

let basket = [];

let generateShop = () => {
  return (shop.innerHTML = shopItemsData
    .map((x) => {
      let { id, name, price, desc, img } = x;
      return `
    <div id=product-id-${id} class="item">
            <img width="220" height="250" src=${img} alt="">
            <div class="details">
                <h3>${name}</h3>
                <p>${desc}</p>
                <div class="price-quantity">
                    <h3>$ ${price}</h3>
                    <div class="buttons">
                        <i onclick="decrement(${id})" class="bi bi-dash-lg"></i>
                        <div id=${id} class="quantity">0</div>
                        <i onclick="increment(${id})" class="bi bi-plus-lg"></i>
                    </div>
                </div>
            </div>
        </div>
    `;
    })
    .join(""));
};

generateShop();

let increment = (id) => {
  let selectedItem = id;
  console.log(selectedItem.id);
};
let decrement = (id) => {
  let selectedItem = id;
  console.log(selectedItem.id);
};
let update = () => {};
