import React, { Component } from 'react';
import './App.css';

import Yggdrasil from './components/tree';
import SearchBar from './components/searchbar';
import Loader from './components/loader';

import { getTreeData } from './datalayer/datalayer';

class App extends Component {
    state = { tree: [],
	      loading: false
	    };

    getData = async (uri) => {
	this.setState({
	    loading: true
	});
	const data = await getTreeData(encodeURIComponent(uri));
	const tree = data.data.data; // I cannot make bricks without clay!
	this.setState({
	    tree: JSON.parse(tree),
	    loading: false
	});
    }
    
    render() {
	return (
	    <div id="top">
		<SearchBar clickHandler={this.getData} />
		{ this.state.loading ? <Loader /> : <Yggdrasil data={this.state.tree} /> }
	    </div>
	);
    }
}

export default App;
