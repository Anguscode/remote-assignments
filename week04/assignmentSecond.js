async function ajax(url) {
    try {
    let response = await fetch(url);
    let data = await response.json();
    return data

    } catch (e) {
    console.log(e.message)
    }
}

function render(data) {
    const productList = document.getElementById("list")

    const productsTotal = data.map(product => {
        return `<li style="padding: 10px;">
                    <span>產品名稱： ${product.name} </span>
                    <span>描述： ${product.description} </span>
                    <span>價格： ${product.price} </span>
                </li>`;
    });


    productList.innerHTML = productsTotal.join('');
    
}

const url = "https://remote-assignment.s3.ap-northeast-1.amazonaws.com/products";

ajax(url).then((data) => {
render(data);
});