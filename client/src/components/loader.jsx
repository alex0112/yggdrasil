import React, {Component} from 'react';

class Loader extends Component {
    render() {
	return(
	    <div id="spinner" className="notice">
	      <div className="notice App-logo">
		/
	      </div>
	      Loading...
	    </div>
	);
    }
};

export default Loader;
