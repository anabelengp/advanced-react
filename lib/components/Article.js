import React from 'react';

const dateDisplay = date => new Date(date).toDateString();

function Article(props) {
  const { article, author } = props;
  return (
    <div>
      <div>{article.title}</div>
      <div>{dateDisplay(article.date)}</div>
      <div>
        <a href={author.website}>
          {author.firstName} {author.lastName}
        </a>
      </div>
      <div>{article.body}</div>
    </div>
  );
}

export default Article;
