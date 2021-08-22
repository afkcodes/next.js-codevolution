import Link from "next/link";

const ProductList = ({productId=100}) => {
  return (
    <div>
      <Link href={`/products/${productId}`} replace>
        <a>
          <h1>Product {productId}</h1>
        </a>
      </Link>
      <Link href="/products/2">
        <a>
          <h1>Product 2</h1>
        </a>
      </Link>
      <Link href="/products/3">
        <a>
          <h1>Product 3</h1>
        </a>
      </Link>
    </div>
  );
};

export default ProductList;
