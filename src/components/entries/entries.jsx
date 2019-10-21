import Entry from "../entry/entry";
import {Link} from "react-router-dom";

class Entries extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {entries} = this.props;

    if (entries && entries.length > 0) {
      return <section className="entries">
        <Link className="entries__add" to={`/edit`}>
          <svg className="entries__add-icon" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="16" height="16" viewBox="0 0 16 16">
            <path d="M15.5 6h-5.5v-5.5c0-0.276-0.224-0.5-0.5-0.5h-3c-0.276 0-0.5 0.224-0.5 0.5v5.5h-5.5c-0.276 0-0.5 0.224-0.5 0.5v3c0 0.276 0.224 0.5 0.5 0.5h5.5v5.5c0 0.276 0.224 0.5 0.5 0.5h3c0.276 0 0.5-0.224 0.5-0.5v-5.5h5.5c0.276 0 0.5-0.224 0.5-0.5v-3c0-0.276-0.224-0.5-0.5-0.5z"/>
          </svg>
          Добавить запись
        </Link>
        <ul className="entries__list">
          {entries.map((entry, i) => {
            if (entry !== null) {
              return <Entry
                entryData={entry.data}
                commentsCount = {entry.comments ? entry.comments.length : 0}
                id={i}
                key={i}
              />;
            }

            return false;
          })}
        </ul>
      </section>;
    }

    return <section className="entries">
      <p className="entries__hint">
        <span className="entries__hint-text">Здесь пока ничего нет. Добавьте первую запись при&nbsp;помощи&nbsp;кнопки&nbsp;ниже</span>
        <Link className="entries__add" to={`/edit`}>
          <svg className="entries__add-icon" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="16" height="16" viewBox="0 0 16 16">
            <path d="M15.5 6h-5.5v-5.5c0-0.276-0.224-0.5-0.5-0.5h-3c-0.276 0-0.5 0.224-0.5 0.5v5.5h-5.5c-0.276 0-0.5 0.224-0.5 0.5v3c0 0.276 0.224 0.5 0.5 0.5h5.5v5.5c0 0.276 0.224 0.5 0.5 0.5h3c0.276 0 0.5-0.224 0.5-0.5v-5.5h5.5c0.276 0 0.5-0.224 0.5-0.5v-3c0-0.276-0.224-0.5-0.5-0.5z"/>
          </svg>
          Добавить запись
        </Link>
      </p>
    </section>;
  }
}

Entries.propTypes = {
  entries: PropTypes.arrayOf(PropTypes.shape({
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
  }))
};

export default Entries;
