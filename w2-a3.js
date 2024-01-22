function calculate(data) {
  const discount = Number(data.discount);
  const products = data.products;
  let total = 0;

//   用 product 來代表 products 陣列內的每個元素，並用 product.price 來帶出其 price 中的 value

  for (const product of products) {
    total += product.price;
  }

  return total * discount;
}


const discountedPrice = calculate({
  discount: 0.1,
  products: [
    { name: "Product 1", price: 100 },
    { name: "Product 2", price: 700 },
    { name: "Product 3", price: 250 }
  ]
});

console.log(discountedPrice);
