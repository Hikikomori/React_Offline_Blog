import {Link} from "react-router-dom";

class EntryEdit extends React.PureComponent {
  constructor(props) {
    super(props);

    const {entryData} = this.props;

    this.state = {
      heading: entryData ? entryData.heading : ``,
      shortDesc: entryData ? entryData.shortDesc : ``,
      fullDesc: entryData ? entryData.fullDesc : ``
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  }

  render() {
    return (
      <div className="entry-edit">
        <Link className="entry-edit__back" to={`/`}>
          <svg className="entry-edit__back-icon" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="16" height="16" viewBox="0 0 16 16">
            <path fill="#000000" d="M0.5 8l7.5 7.5v-4.5h8v-6h-8v-4.5z"/>
          </svg>
          <span className="entry-edit__back-text">Вернуться к списку записей</span>
        </Link>
        <form action="" method="POST" onSubmit={(evt) => {
          evt.preventDefault();
          this.props.onSubmit({
            heading: this.state.heading,
            shortDesc: this.state.shortDesc,
            fullDesc: this.state.fullDesc
          });
        }} className="entry-edit__form">
          <div className="entry-edit__input-label">
            <label className="entry-edit__label" htmlFor="heading">Заголовок: </label>
            <input className="entry-edit__input entry-edit__input--text" type="text" onChange={this.handleChange} value={this.state.heading} id="heading" name="heading" placeholder="Введите заголовок" required/>
          </div>
          <div className="entry-edit__input-label">
            <label className="entry-edit__label" htmlFor="shortDesc">Короткое описание: </label>
            <textarea className="entry-edit__input entry-edit__input--textarea" onChange={this.handleChange} value={this.state.shortDesc} id="shortDesc" name="shortDesc" placeholder="Введите короткое описание" required/>
          </div>
          <div className="entry-edit__input-label">
            <label className="entry-edit__label" htmlFor="fullDesc">Полное описание: </label>
            <textarea className="entry-edit__input entry-edit__input--textarea" onChange={this.handleChange} value={this.state.fullDesc} id="fullDesc" name="fullDesc" placeholder="Введите полное описание"/>
          </div>
          <button className="entry-edit__submit" type="submit">
            <svg className="entry-edit__submit-icon" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="16" height="16" viewBox="0 0 16 16">
              <path d="M14 0h-14v16h16v-14l-2-2zM8 2h2v4h-2v-4zM14 14h-12v-12h1v5h9v-5h1.172l0.828 0.828v11.172z"/>
            </svg>
            <span className="entry-edit__submit-text">
              Сохранить
            </span>
          </button>
        </form>
      </div>
    );
  }
}

EntryEdit.propTypes = {
  entryData: PropTypes.shape({
    heading: PropTypes.string,
    shortDesc: PropTypes.string,
    fullDesc: PropTypes.string
  }),
  onSubmit: PropTypes.func.isRequired
};

export default EntryEdit;
