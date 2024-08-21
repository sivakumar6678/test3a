import ProductItems from "./productsitems/product-items";
function Productlist({a}){
    return (
        <div>
            <h1>Product List</h1>
            <ul>
                {
                   a.map((item, index) => {
                        // return <li key={index}>Product {item} > </li>
                        return <ProductItems products={item} />

                    })
                }
            </ul>
        </div>
    )
}
export default Productlist;