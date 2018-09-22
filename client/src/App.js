import React, { Component } from 'react';
import './App.css';

import Yggdrasil from './components/tree';
import SearchBar from './components/searchbar';

import { getTreeData } from './datalayer/datalayer';

class App extends Component {
    state = { tree: [] };

    getData = async (uri) => {
 	const data = await getTreeData(encodeURIComponent(uri));
	const tree = data.data.data; // I cannot make bricks without clay!
	this.setState({
	    tree: JSON.parse(tree)
	});
    }
    
    render() {
	return (
	    <div id="top">
		<SearchBar clickHandler={this.getData}/>
		<Yggdrasil data={this.state.tree} />
	    </div>
	);
    }
}

export default App;
