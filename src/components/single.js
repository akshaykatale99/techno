import React from 'react';
import { Link } from "react-router-dom";
import Loader from './loader';

class Single extends React.Component {

   constructor(props) {
     super(props);
     this.state = {
      singleState: props.match.params.type,
     };
   }

   getData() {
      const options = {
          method: 'GET',
      };

      return fetch('https://jsonplaceholder.typicode.com/posts/' + this.props.match.params.id, options)
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

   render() {
     if(this.state.singleState == 'new'){
       var actionButton = <Link className="btn" to ="/"> Add </Link>;
     } else if(this.state.singleState == 'edit'){
       var actionButton = <Link className="btn" to ="/"> Edit </Link>;
     }

      return (
         <div className="single">
             { (this.state.loading) ? <Loader/> : ''}
             <div className="list-header">
                <h3>{this.state.singleState} post</h3>
                <Link className="btn" to="/"> Close </Link>
             </div>
            <div className="form">
              <div className="field">
                <label htmlFor="id">Post id: </label>
                <input value={(this.state.data) ? this.state.data.id : ''} type="text" name="id" readOnly={(this.state.singleState == 'view') ? true : false} />
              </div>
              <div className="field">
                <label htmlFor="uid">User id: </label>
                <input value={(this.state.data) ? this.state.data.userId : ''} type="text" name="uid" readOnly={(this.state.singleState == 'view') ? true : false} />
              </div>
              <div className="field">
                <label htmlFor="title">Post title: </label>
                <input value={(this.state.data) ? this.state.data.title : ''} type="text" name="title" readOnly={(this.state.singleState == 'view') ? true : false} />
              </div>
              <div className="field">
                <label htmlFor="content">Post content: </label>
                <textarea value={(this.state.data) ? this.state.data.body : ''} rows="5" name="content" readOnly={(this.state.singleState == 'view') ? true : false}>
                </textarea>
              </div>
              <div className="buttons">
                {actionButton}
                <Link className="btn" to="/"> Cancel </Link>
              </div>
            </div>
          </div>
      )
   }
}
export default Single;