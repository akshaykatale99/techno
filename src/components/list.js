import React from 'react';

class ListView extends React.Component {

   constructor(props) {
     super(props);
   
     this.state = {
     	data: []
     };
   }

   render() {
   	  const listHeader = (this.props.listHeader) ? this.props.listHeader : '';
      return (
         <div className = {this.props.cssClass}>
         	{listHeader}
         	<ul>
         	{
         		this.props.data.map((e, i) => (
         			<li key={i}> {this.props.itemToRender(e)} </li>
         		))
         	}
         	</ul>
         </div>
      )
   }
}
export default ListView;