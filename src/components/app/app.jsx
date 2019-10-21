import {Router, Switch, Route, Redirect} from "react-router-dom";
import history from "../../history";

import Entries from "../entries/entries";
import EntryEdit from "../entry-edit/entry-edit";
import EntryShow from "../entry-show/entry-show";

class App extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      entries: localStorage.getItem(`entries`) ? JSON.parse(localStorage.getItem(`entries`)) : []
    };
  }

  render() {
    window.addEventListener(`storage`, () => {
      this.setState({
        entries: JSON.parse(localStorage.getItem(`entries`))
      });
    });

    return (
      <Router history={history}>
        <Switch>
          <Route path="/" exact render={() => {
            return <Entries
              entries = {this.state.entries}
            />;
          }}/>
          <Route path="/edit" exact render={() => {
            return <EntryEdit
              onSubmit={(entryData) => {
                localStorage.setItem(`entries`, JSON.stringify(this.state.entries.concat({
                  data: entryData,
                  comments: []
                })));

                this.setState({
                  entries: JSON.parse(localStorage.getItem(`entries`))
                });

                history.push(`/`);
              }}
            />;
          }}/>
          <Route path="/edit/:id" render={({match}) => {
            const id = parseInt(match.params.id, 10);
            const selectedEntry = this.state.entries[id];

            if (id < this.state.entries.length) {
              return <EntryEdit
                entryData = {
                  {
                    heading: selectedEntry.data.heading,
                    shortDesc: selectedEntry.data.shortDesc,
                    fullDesc: selectedEntry.data.fullDesc,
                  }
                }

                onSubmit={(entryData) => {
                  const {
                    heading,
                    shortDesc,
                    fullDesc
                  } = entryData;

                  localStorage.setItem(`entries`, JSON.stringify(this.state.entries.map((entry, i) => {
                    if (i === id) {
                      entry.data.heading = heading;
                      entry.data.shortDesc = shortDesc;
                      entry.data.fullDesc = fullDesc;
                    }

                    return entry;
                  })));

                  this.setState({
                    entries: JSON.parse(localStorage.getItem(`entries`))
                  });

                  history.push(`/show/${id}`);
                }}
              />;
            }

            return <Redirect to="/"/>;
          }}/>

          <Route path="/show/:id" render={({match}) => {
            const entryId = parseInt(match.params.id, 10);
            const selectedEntry = this.state.entries[entryId];

            return <EntryShow
              entry = {selectedEntry}

              onEdit = {() => {
                history.push(`/edit/${entryId}`);
              }}

              onDelete = {() => {
                localStorage.setItem(`entries`, JSON.stringify(this.state.entries.filter((_entry, i) => {
                  return i !== entryId;
                })));

                this.setState({
                  entries: JSON.parse(localStorage.getItem(`entries`))
                });

                history.push(`/`);
              }}

              onCommentAdd = {(commentData) => {
                localStorage.setItem(`entries`, JSON.stringify(this.state.entries.map((entry, i) => {
                  if (i === entryId) {
                    entry.comments.push(commentData);
                  }

                  return entry;
                })));

                this.setState({
                  entries: JSON.parse(localStorage.getItem(`entries`))
                });
              }}

              onCommentDelete = {(commentId) => {
                localStorage.setItem(`entries`, JSON.stringify(this.state.entries.map((entry, i) => {
                  if (i === entryId) {
                    entry.comments = entry.comments.filter((_comment, id) => {
                      return id !== commentId;
                    });
                  }

                  return entry;
                })));

                this.setState({
                  entries: JSON.parse(localStorage.getItem(`entries`))
                });
              }}
            />;
          }}/>
        </Switch>
      </Router>


    );
  }
}

export default App;
