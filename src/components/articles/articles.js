export const Articles = ({ articles }) => {
  return (
    <div>
      {articles.map((article) => (
        <span key={article.slug}>{article.title}</span>
      ))}
    </div>
  );
};
