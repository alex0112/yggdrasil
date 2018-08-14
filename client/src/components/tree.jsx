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

//<Tree data={this.props.data} orientation='vertical' />
export default class Yggdrasil extends Component {
    render() {
	return (
	    <div>
	      THIS{JSON.stringify(this.props.data)}HERE
	    </div>
	    );
    }
}
