import Link from "next/link";

const PostList = ({ posts }) => {
  return (
    <div>
      <h1>Lists of Posts</h1>
      {posts.map((post) => {
        return (
          <div key={post.id}>
            <Link href={`posts/${post.id}`} passHref>
              <h2>
                <a>
                  {post.id} - {post.title}
                </a>
              </h2>
            </Link>
            <hr />
          </div>
        );
      })}
    </div>
  );
};

export default PostList;

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  console.log(data);

  return {
    props: {
      posts: data.slice(0,3),
    },
  };
}
