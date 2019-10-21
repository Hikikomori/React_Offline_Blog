import {Link} from "react-router-dom";

const Entry = (props) => {
  const {entryData, commentsCount, id} = props;

  const {
    heading,
    shortDesc
  } = entryData;

  return (
    <li className="entry">
      <Link className="entry__link" to={`/show/${id}`}>
        <h2 className="entry__heading">
          {heading}
        </h2>
        <p className="entry__short-desc">
          {shortDesc}
        </p>
        <p className="entry__comments" title={`Комментариев: ${commentsCount}`}>
          <svg className="entry__comments-icon" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="16" height="16" viewBox="0 0 16 16">
            <path fill="#000000" d="M8 1c4.418 0 8 2.91 8 6.5s-3.582 6.5-8 6.5c-0.424 0-0.841-0.027-1.247-0.079-1.718 1.718-3.77 2.027-5.753 2.072v-0.421c1.071-0.525 2-1.48 2-2.572 0-0.152-0.012-0.302-0.034-0.448-1.809-1.192-2.966-3.012-2.966-5.052 0-3.59 3.582-6.5 8-6.5z"/>
          </svg>
          {commentsCount}
        </p>
      </Link>
    </li>
  );
};

Entry.propTypes = {
  commentsCount: PropTypes.number.isRequired,
  entryData: PropTypes.shape({
    heading: PropTypes.string.isRequired,
    shortDesc: PropTypes.string.isRequired
  }).isRequired,
  id: PropTypes.number.isRequired
};

export default Entry;
