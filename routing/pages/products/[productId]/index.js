import { useRouter } from "next/dist/client/router";
const ProductDetails = () => {
  const router = useRouter();
  const productId = router.query.productId;
  return (
    <div>
      <h1>Product Details Page {productId}</h1>
    </div>
  );
};

export default ProductDetails;
