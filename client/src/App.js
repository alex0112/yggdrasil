import React, { Component } from 'react';
import './App.css';

import Yggdrasil from './components/tree';
import SearchBar from './components/searchbar';

class App extends Component {
    render() {
	return (
	    <div>

	      <SearchBar/>
	      <Yggdrasil/>

	    </div>
	);
    }
}

export default App;
