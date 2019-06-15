import React from 'react';
import './App.css';
import { Link } from "react-router-dom";
import Loader from './components/loader';

import ListView from './components/list';
import ListItem from './components/listItem';


class App extends React.Component {
 constructor(props) {
   super(props);
 
   this.state = {
     data: []
   };
 }

 getData() {

      const options = {
          method: 'GET',
      };

      return fetch('https://jsonplaceholder.typicode.com/posts', options)
      .then((response) => response.json())
      .then((responseJson) => { 
          return responseJson;
      })
      .catch((error) => {
          console.log(error);
          return error;
      });
  }


 componentDidMount(){
   this.setState({loading: true});
   this.getData().then(res => {
     this.setState({loading: false});
     this.setState({data: res});
   });
 }

 render(){
    return (
      <div className="App">
          { (this.state.loading) ? <Loader/> : ''}
          <ListView
              cssClass = "list" 
              data = {this.state.data}
              listHeader = { 
                <div className="list-header">
                  <h3>Posts List</h3>
                  <Link className="btn btn-primary" to="/single/new"> Add </Link>
                </div>
              }
              itemToRender = {(item) => <ListItem
                                          data={item}
                                          key={item.id} 
                                          onView = {(id) => this.props.history.push("/single/view/" + id)}
                                          onEdit = {(id) => this.props.history.push("/single/edit/" + id)} 
                                          />
                                      }
           />
      </div>
    );
  }
}

export default App;
