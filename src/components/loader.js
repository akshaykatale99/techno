import React from 'react';

class Loader extends React.Component {

   constructor(props) {
     super(props);
   
     this.state = {
     	data: []
     };
   }

   render() {
      return (
         <div className="loader">
            <img src={require('../assets/spinner.gif')} />  
         </div>
      )
   }
}
export default Loader;