import React, { Component } from 'react';

export default class SearchBar extends Component {

    state = { input: '' };

    render() {
	return(
	    <div id="searchbar">
	      <label>URI: </label>
	      <input type="url" name="url" id="url"
		     placeholder="https://"
		     pattern="https://.*" required
		     onChange={ (e) => this.setState({ input: e.target.value}) }
		     />
		<input type="submit" onClick={ () => { this.props.clickHandler(this.state.input) }} />
	    </div>
	);
    }

}
