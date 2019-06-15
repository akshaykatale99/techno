import React from 'react';

class ListItem extends React.Component {

   constructor(props) {
     super(props);
   
     this.state = {
     	data: []
     };
   }

   render() {
      return (
         <div className="listItem">
           <div className = "sr">
             <h4>{this.props.data.id}</h4>
           </div>
            <div className = "title">
              <h4>{this.props.data.title}</h4>
            </div>
            <div className = "actions">
              <button className="btn" onClick={() => this.props.onView(this.props.data.id)}>View</button>
              <button className="btn" onClick={() => this.props.onEdit(this.props.data.id)}>Edit</button>
            </div>
          </div>
      )
   }
}
export default ListItem;