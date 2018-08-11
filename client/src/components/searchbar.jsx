import React, { Component } from 'react';

export default class SearchBar extends Component {

    inputHandler(input) {
	
    }

    render() {
	return(
	    <div id="searchbar">
	      <label>URI: </label>
	      <input type="url" name="url" id="url"
		     placeholder="https://"
		     pattern="https://.*" required
		     />
	    </div>
	);
    }

}
