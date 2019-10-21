import Comment from "../comment/comment";

const Comments = (props) => {
  const {
    comments,
    onCommentDelete
  } = props;

  return (
    <section className="comments">
      <h3 className="comments__heading">Комментарии</h3>
      <ul className="comments__list">
        {comments && comments.length > 0 && comments.map((comment, i) => {
          if (comment !== null) {
            return <Comment
              commentData = {comment}
              key = {i}
              onDelete = {() => {
                onCommentDelete(i);
              }}
            />;
          }

          return false;
        })}
      </ul>
    </section>
  );
};

Comments.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.shape({
    author: PropTypes.string,
    text: PropTypes.string,
    timestamp: PropTypes.number
  })),
  onCommentDelete: PropTypes.func.isRequired
};

export default Comments;
