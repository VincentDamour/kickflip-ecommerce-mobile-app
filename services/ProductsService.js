const PRODUCTS = [
  {
    id: 100,
    name: "Travel Mug",
    price: 30,
    image: require("../assets/products/travel-mug.png"),
    customizerUrl:
      "https://demo-app-mobile.gokickflip.co/customize/startingpoint/62cc2f13e399962bd0ae75fc?shopid=62cc2f06e399962bd0ae75da",
  },
  {
    id: 101,
    name: "Soccer Ball",
    price: 60,
    image: require("../assets/products/soccer-ball.png"),
    customizerUrl:
      "https://demo-app-mobile.gokickflip.co/customize/startingpoint/62cc2f28e399962bd0ae7664?shopid=62cc2f06e399962bd0ae75da",
  },
  {
    id: 102,
    name: "T-Shirt",
    price: 15,
    image: require("../assets/products/t-shirt.png"),
    customizerUrl:
      "https://demo-app-mobile.gokickflip.co/customize/startingpoint/62cc2f21e399962bd0ae7634?shopid=62cc2f06e399962bd0ae75da",
  },
];

export function getProducts() {
  return PRODUCTS;
}

export function getProduct(id) {
  return PRODUCTS.find((product) => product.id == id);
}
