import React, {Component} from 'react';

import Tree from 'react-d3-tree';
import Loader from './loader';

//  <Tree /> expects data in this form:
// [
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

export default class Yggdrasil extends Component {  // TODO:  Functional component.

    render() {
	return (
	    <div id='container'>
	      {this.props.data.length !== 0 ?
		  <Tree
			data={this.props.data}
			orientation='vertical'
			/>
		  : "" }
	    </div>
	    );
    }

}
