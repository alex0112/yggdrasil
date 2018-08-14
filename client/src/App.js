import React, { Component } from 'react';
import './App.css';

import Yggdrasil from './components/tree';
import SearchBar from './components/searchbar';

import { getTreeData } from './datalayer/datalayer';

class App extends Component {
    state = { data: [] };
    
    componentDidMount = () => {
	this.getData();
    }

    getData = async () => {
 	const data = await getTreeData('https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FYggdrasil');
	
	console.log('foo');
	console.log(data);
	this.setState({
	    data
	});
    }

    
    render() {
	return (
	    <div>
	      <div>
		<SearchBar />
		<Yggdrasil data={this.state.data} />
	      </div>

	      <div>
		{this.state.data}
	      </div>
	    </div>
	);
    }

}

export default App;
