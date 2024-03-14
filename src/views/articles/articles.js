import s from "./articles.module.css";

export const Articles = ({articles}) => {

  return (
    <div className={s.container}>
      {articles.map((article) => (
        <div className={s.article} key={article.id}>
          <h2>{article.title}</h2>
          <span>•</span>
          <span className={s.author}>{article.author}</span>
        </div>
      ))}
    </div>
  );
};
