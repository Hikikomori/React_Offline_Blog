class CommentAdd extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      author: ``,
      text: ``
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
      <div className="comment-add">
        <p className="comment-add__about">
          Добавить комментарий
        </p>
        <form action="" method="POST" onSubmit={(evt) => {
          evt.preventDefault();
          this.props.onSubmit({
            author: this.state.author,
            text: this.state.text,
            timestamp: Date.now()
          });

          this.setState({
            author: ``,
            text: ``
          });
        }} className="comment-add__form">
          <div className="comment-add__input-label">
            <label className="comment-add__label" htmlFor="author">Имя: </label>
            <input className="comment-add__input comment-add__input--text" type="text" onChange={this.handleChange} value={this.state.author} id="author" name="author" placeholder="Введите имя" required/>
          </div>
          <div className="comment-add__input-label">
            <label className="comment-add__label" htmlFor="text">Комментарий: </label>
            <textarea className="comment-add__input comment-add__input--textarea" onChange={this.handleChange} value={this.state.text} id="text" name="text" placeholder="Введите комментарий" required/>
          </div>
          <button className="comment-add__submit" type="submit">
            <svg className="comment-add__submit-icon" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="16" height="16" viewBox="0 0 16 16">
              <path d="M15.5 6h-5.5v-5.5c0-0.276-0.224-0.5-0.5-0.5h-3c-0.276 0-0.5 0.224-0.5 0.5v5.5h-5.5c-0.276 0-0.5 0.224-0.5 0.5v3c0 0.276 0.224 0.5 0.5 0.5h5.5v5.5c0 0.276 0.224 0.5 0.5 0.5h3c0.276 0 0.5-0.224 0.5-0.5v-5.5h5.5c0.276 0 0.5-0.224 0.5-0.5v-3c0-0.276-0.224-0.5-0.5-0.5z"/>
            </svg>
            <span className="comment-add__submit-text">
              Добавить
            </span>
          </button>
        </form>
      </div>
    );
  }
}

export default CommentAdd;

CommentAdd.propTypes = {
  onSubmit: PropTypes.func.isRequired
};
