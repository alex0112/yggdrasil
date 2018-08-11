import React, { Component } from 'react';
import './App.css';

import Yggdrasil from './components/tree';
import SearchBar from './components/searchbar';

import { getTreeData } from './datalayer/datalayer';

class App extends Component {
    
    render() {
	return (
	    <div>
	      <div>
		<SearchBar />
		<Yggdrasil />
	      </div>

	      <div>
		{getTreeData('https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FYggdrasil')}
	      </div>
	    </div>
	);
    }

}

export default App;
