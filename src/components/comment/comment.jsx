const Comment = (props) => {
  const {
    commentData,
    onDelete
  } = props;

  const {
    author,
    text,
    timestamp
  } = commentData;

  const datetime = new Date(timestamp);

  return (
    <li className="comment">
      <button className="comment__delete" title="Удалить комментарий" onClick={onDelete}>
        <svg className="comment__delete-icon" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="16" height="16" viewBox="0 0 16 16">
          <path d="M15.854 12.854c-0-0-0-0-0-0l-4.854-4.854 4.854-4.854c0-0 0-0 0-0 0.052-0.052 0.090-0.113 0.114-0.178 0.066-0.178 0.028-0.386-0.114-0.529l-2.293-2.293c-0.143-0.143-0.351-0.181-0.529-0.114-0.065 0.024-0.126 0.062-0.178 0.114 0 0-0 0-0 0l-4.854 4.854-4.854-4.854c-0-0-0-0-0-0-0.052-0.052-0.113-0.090-0.178-0.114-0.178-0.066-0.386-0.029-0.529 0.114l-2.293 2.293c-0.143 0.143-0.181 0.351-0.114 0.529 0.024 0.065 0.062 0.126 0.114 0.178 0 0 0 0 0 0l4.854 4.854-4.854 4.854c-0 0-0 0-0 0-0.052 0.052-0.090 0.113-0.114 0.178-0.066 0.178-0.029 0.386 0.114 0.529l2.293 2.293c0.143 0.143 0.351 0.181 0.529 0.114 0.065-0.024 0.126-0.062 0.178-0.114 0-0 0-0 0-0l4.854-4.854 4.854 4.854c0 0 0 0 0 0 0.052 0.052 0.113 0.090 0.178 0.114 0.178 0.066 0.386 0.029 0.529-0.114l2.293-2.293c0.143-0.143 0.181-0.351 0.114-0.529-0.024-0.065-0.062-0.126-0.114-0.178z"/>
        </svg>
        <span className="visually-hidden">Удалить комментарий</span>
      </button>
      <p className="comment__author">
        {author}
      </p>
      <time className="comment__timestamp" dateTime={datetime.toISOString()}>
        {`${datetime.toLocaleDateString()} в ${datetime.toLocaleTimeString()}`}
      </time>
      <p className="comment__text">
        {text}
      </p>
    </li>
  );
};

Comment.propTypes = {
  commentData: PropTypes.shape({
    author: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    timestamp: PropTypes.number.isRequired
  }).isRequired,
  onDelete: PropTypes.func.isRequired
};

export default Comment;
