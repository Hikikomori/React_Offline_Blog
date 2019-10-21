import Comments from "../comments/comments";
import CommentAdd from "../comment-add/comment-add";
import {Link} from "react-router-dom";

const EntryShow = (props) => {
  const {
    entry,
    onEdit,
    onDelete,
    onCommentAdd,
    onCommentDelete
  } = props;

  const {
    data,
    comments
  } = entry;

  const {
    heading,
    fullDesc
  } = data;

  return (
    <div className="entry-show">
      <Link className="entry-show__back" to={`/`}>
        <svg className="entry-show__back-icon" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="16" height="16" viewBox="0 0 16 16">
          <path d="M0.5 8l7.5 7.5v-4.5h8v-6h-8v-4.5z"/>
        </svg>
        <span className="entry-show__back-text">Вернуться к списку записей</span>
      </Link>
      <ul className="entry-show__actions">
        <li className="entry-show__action">
          <button onClick={onEdit} title="Редактировать запись" className="entry-show__action-button entry-show__action-button--edit">
            <svg className="entry-show__icon" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24" height="24" viewBox="0 0 16 16">
              <path d="M6 10l2-1 7-7-1-1-7 7-1 2zM4.52 13.548c-0.494-1.043-1.026-1.574-2.069-2.069l1.548-4.262 2-1.217 6-6h-3l-6 6-3 10 10-3 6-6v-3l-6 6-1.217 2z"/>
            </svg>
            <span className="visually-hidden">Редактировать запись</span>
          </button>
        </li>
        <li className="entry-show__action">
          <button onClick={onDelete} title="Удалить запись" className="entry-show__action-button entry-show__action-button--delete">
            <svg className="entry-show__icon" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24" height="24" viewBox="0 0 16 16">
              <path d="M15.854 12.854c-0-0-0-0-0-0l-4.854-4.854 4.854-4.854c0-0 0-0 0-0 0.052-0.052 0.090-0.113 0.114-0.178 0.066-0.178 0.028-0.386-0.114-0.529l-2.293-2.293c-0.143-0.143-0.351-0.181-0.529-0.114-0.065 0.024-0.126 0.062-0.178 0.114 0 0-0 0-0 0l-4.854 4.854-4.854-4.854c-0-0-0-0-0-0-0.052-0.052-0.113-0.090-0.178-0.114-0.178-0.066-0.386-0.029-0.529 0.114l-2.293 2.293c-0.143 0.143-0.181 0.351-0.114 0.529 0.024 0.065 0.062 0.126 0.114 0.178 0 0 0 0 0 0l4.854 4.854-4.854 4.854c-0 0-0 0-0 0-0.052 0.052-0.090 0.113-0.114 0.178-0.066 0.178-0.029 0.386 0.114 0.529l2.293 2.293c0.143 0.143 0.351 0.181 0.529 0.114 0.065-0.024 0.126-0.062 0.178-0.114 0-0 0-0 0-0l4.854-4.854 4.854 4.854c0 0 0 0 0 0 0.052 0.052 0.113 0.090 0.178 0.114 0.178 0.066 0.386 0.029 0.529-0.114l2.293-2.293c0.143-0.143 0.181-0.351 0.114-0.529-0.024-0.065-0.062-0.126-0.114-0.178z"/>
            </svg>
            <span className="visually-hidden">Удалить запись</span>
          </button>
        </li>
      </ul>
      <h2 className="entry-show__heading">
        {heading}
      </h2>
      <p className="entry-show__full-desc">
        {fullDesc}
      </p>
      <div className="entry-show__comments">
        <Comments
          comments={comments}
          onCommentDelete={onCommentDelete}
        />
      </div>
      <div className="entry-show__new-comment">
        <CommentAdd
          onSubmit = {onCommentAdd}
        />
      </div>
    </div>
  );
};

EntryShow.propTypes = {
  entry: PropTypes.shape({
    comments: PropTypes.arrayOf(
        PropTypes.shape({
          author: PropTypes.string,
          text: PropTypes.string,
          timestamp: PropTypes.number
        })
    ),
    data: PropTypes.shape({
      heading: PropTypes.string.isRequired,
      shortDesc: PropTypes.string.isRequired,
      fullDesc: PropTypes.string.isRequired
    })
  }).isRequired,
  onCommentAdd: PropTypes.func.isRequired,
  onCommentDelete: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired
};

export default EntryShow;
