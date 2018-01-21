import React from 'react';

const formatDate = (date) => new Date(date).toDateString();
const Article = ({actions,article}) => {
  const author = actions.lookupAuthor(article.authorId);
  return(
    <div>
      <div>{article.title}</div>
      <div>{formatDate(article.date)}</div>
      <div>
        <a href={author.website}>
          {author.firstName} - {author.lastName}
        </a>
      </div>
      <div>{article.body}</div>
      <hr/>
    </div>
  );
};

export default Article;

