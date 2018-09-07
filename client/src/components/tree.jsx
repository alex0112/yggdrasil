import React, {Component} from 'react';

import Tree from 'react-d3-tree';

// const myTreeData = [
//   {
//     name: 'Top Level',
//     children: [
//       {
//         name: 'Level 2: A'
//       },
//       {
//         name: 'Level 2: B'
//       },
//     ]
//   },
// ];

export default class Yggdrasil extends Component {
    render() {
	return (
	    <div>
	      {this.props.data.length === 0 ? 'Loading...' : <Tree data={this.props.data} orientation='vertical' /> }
	    </div>
	    );
    }
}
