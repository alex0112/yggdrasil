import React, { Component } from 'react';
import './App.css';

import Yggdrasil from './components/tree';
import SearchBar from './components/searchbar';
import Loader from './components/loader';
import Error from './components/error';
import Title from './components/title';

import { getTreeData } from './datalayer/datalayer';

class App extends Component {
    state = { tree: [],
	      loading: false,
	      error: false
	    };

    getData = async (uri) => {
	this.setState({
	    loading: true,
	    error: false
	});

	const data = await getTreeData(encodeURIComponent(uri));

	if (data.error) {
	    this.setState({
		loading: false,
		error: true,
		tree: []
	    });
	}
	else {
	    const tree = data.data.data; // I cannot make bricks without clay!
	    this.setState({
		tree: [JSON.parse(tree)],
		loading: false
	    });
	}
    }
    
    render() {
	return (
	    <div id="top">
	      <Title/>
	      <SearchBar clickHandler={this.getData} />
		{ this.state.loading ? <Loader /> : <Yggdrasil data={this.state.tree} /> }
		{ this.state.error ? <Error message="Hm.  Something seems to have gone wrong.  Please check your URL." /> : "" }
	    </div>
	);
    }
}

export default App;
