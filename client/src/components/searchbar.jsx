import React, { Component } from 'react';

export default class SearchBar extends Component {

    state = { input: '' };

    render() {
	return(
	    <div id="searchbar">
	      <form onSubmit={ () => { this.props.clickHandler(this.state.input) } } >
		<input type="url" className="wiki-input" name="url" id="url"
		       placeholder="https://"
		       pattern="https://.*"
		       onChange={ (e) => this.setState({ input: e.target.value}) }
		  />
		  <input type="submit" className="wiki-button" onClick={ () => { this.props.clickHandler(this.state.input) } } />
	      </form>
	    </div>
	);
    }

}
