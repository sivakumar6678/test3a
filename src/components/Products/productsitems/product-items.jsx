import './product-items.css';

function buttonClick() {
    return (
        <button>Click </button>
    );
}

function ProductItems({ products}) {
  return (
    <div className="product-items">
     
        <li >Product {products} </li> 
        <span className="btn">
        {buttonClick() }

        </span>

    </div>
  );
}
export default ProductItems ;