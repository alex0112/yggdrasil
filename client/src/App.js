import React, { Component } from 'react';
import './App.css';

import Yggdrasil from './components/tree';
import SearchBar from './components/searchbar';

import { getTreeData } from './datalayer/datalayer';

class App extends Component {
    state = { tree: [] };
    
    componentWillMount = () => {
	this.getData();
    }

    getData = async () => {
 	const data = await getTreeData('https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FYggdrasil');
	const tree = data.data.data; // I cannot make bricks without clay!
	this.setState({
	    tree: JSON.parse(tree)
	});
    }
    
    render() {
	return (
	    <div>
	      <div>
		<SearchBar />
		<Yggdrasil data={this.state.tree} />
	      </div>
	    </div>
	);
    }
}

export default App;
