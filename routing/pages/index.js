import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  const router = useRouter();

  const handleClick = () => {
    console.log("placing your order");
    setTimeout(() => {
      router.push("/products");
    }, 2000);
  };
  return (
    <div className={styles.container}>
      Hello from next js
      <Link href="/blog">
        <a>Blogs</a>
      </Link>
      <Link href="/products">
        <a>Products</a>
      </Link>
      <button onClick={handleClick}>Place Order</button>
    </div>
  );
}
