import React, { Component } from 'react';

export default class SearchBar extends Component {

    state = { input: '' };
    //	      <form onSubmit={ () => { this.props.clickHandler(this.state.input) } } preventDefault >
    // </form>
    render() {
	return(
	    <div id="searchbar">

		<input type="url" className="wiki-input" name="url" id="url"
		       placeholder="https://"
		       pattern="https://.*"
		       onChange={ (e) => this.setState({ input: e.target.value}) }
		  />
		  <input type="submit" className="wiki-button" onClick={ () => { this.props.clickHandler(this.state.input) } } />

	    </div>
	);
    }

}
