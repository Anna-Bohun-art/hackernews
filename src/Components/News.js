import Spinner from "./Spinner";
import "./news.css";

export default function News({ articles }) {
  return (
    <div className="news">
      {articles ? (
        articles.map((article, key) => {
          return (
            <div key={article.created_at_i} className="article">
              <h1
                style={{ cursor: "pointer", display: "inline-block" }}
                onClick={() => window.open(article.url, "_blank")}
              >
                {article.title}
              </h1>
              <hr />
              <p>
                Article by {article.author} | Created at {article.created_at} |
                Number of comments {article.num_comments}
              </p>
            </div>
          );
        })
      ) : (
        <Spinner />
      )}
    </div>
  );
}
