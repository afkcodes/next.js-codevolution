import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Next JS pre-rendering</h1>
      <Link href="/users" prefetch={false}>
        <a>users</a>
      </Link>
      <Link href="/posts" prefetch={false}>
        <a>Posts</a>
      </Link>
      <Link href="/news" prefetch={false}>
        <a>News</a>
      </Link>
    </div>
  );
}
