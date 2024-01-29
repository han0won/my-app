import Item from "./Item"

function Product() {
    const productsArr = [
        {name: '상품1', price: 1000},
        {name: '상품2', price: 2000},
        {name: '상품3', price: 3000},
    ]

    return (
        <div>
            <h1>Product</h1>
            <ul>
                {productsArr.map((item, index) => (
                    <Item key={index} item={item}/>
                ))}

            </ul>
        </div>
    )
}

export default Product