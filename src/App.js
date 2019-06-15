import React from "react";
import "./App.css";
import { Link } from "react-router-dom";
import Loader from "./components/loader";

import ListView from "./components/list";
import ListItem from "./components/listItem";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: []
    };
  }

  getData() {
    this.setState({ loading: true });
    const options = {
      method: "GET"
    };

    fetch("https://jsonplaceholder.typicode.com/posts", options)
      .then(response => response.json())
      .then(responseJson => {
        this.setState({ loading: false });
        this.setState({ data: responseJson });
      })
      .catch(error => {
        console.log(error);
      });
  }

  componentDidMount() {
    this.getData();
  }

  render() {
    return (
      <div className="App">
        {this.state.loading ? <Loader /> : ""}
        <ListView
          cssClass="list"
          data={this.state.data}
          listHeader={
            <div className="list-header">
              <h3>Posts List</h3>
              <Link className="btn btn-primary" to="/post/new">
                {" "}
                Add{" "}
              </Link>
            </div>
          }
          itemToRender={item => (
            <ListItem
              data={item}
              key={item.id}
              onView={id => this.props.history.push("/post/view/" + id)}
              onEdit={id => this.props.history.push("/post/edit/" + id)}
            />
          )}
        />
      </div>
    );
  }
}

export default App;
