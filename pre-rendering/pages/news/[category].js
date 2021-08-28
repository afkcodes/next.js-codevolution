const ArticleListByCategory = ({ category, articles }) => {
  return (
    <div>
      <h1>Showing News for {category}</h1>
      {articles.map((article) => {
        return (
          <div>
            <h2>
              {article.id} {article.title} | {article.category}
            </h2>
            <hr />
          </div>
        );
      })}
    </div>
  );
};

export default ArticleListByCategory;

export async function getServerSideProps(context) {
  const { params } = context;
  const { category } = params;
  const response = await fetch(
    `http://localhost:3000/news?category=${category}`
  );
  const data = await response.json();

  return {
    props: {
      articles: data,
      category,
    },
  };
}
