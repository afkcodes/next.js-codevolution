const Post = ({ post }) => {
  return (
    <div>
      <h2>
        {post.id} - {post.title}
      </h2>
      <p>{post.body}</p>
    </div>
  );
};

export default Post;

export async function getStaticPaths() {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/`);
  const data = await response.json();
  const paths = data.map((post) => {
    return {
      params: {
        postId: `${post.id}`,
      },
    };
  });

  return {
    paths: [
      {
        params: {
          postId: "1",
        },
      },
      {
        params: {
          postId: "2",
        },
      },
      {
        params: {
          postId: "3",
        },
      },
    ],
    // paths,
    fallback: false,
    // fallback: true,  Needs a fallback component to render until it renders the new page on the fly
    // fallback: "blocking", Does not needs fallback component shows white or default loading screen i.e white sceen while ite generates new page on the fly. 

  };
}

export async function getStaticProps(context) {
  const { params } = context;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postId}`
  );
  const data = await response.json();
  console.log(data);

  console.log(`Generating page for posts/${params.postId}`);

  return {
    props: {
      post: data,
      // revalidate:10  revalidate assures incremental static regeneration where it regenerates the page after 10 second .
    },
  };
}
