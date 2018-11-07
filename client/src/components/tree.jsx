import React, {Component} from 'react';

import Tree from 'react-d3-tree';

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
			orientation="vertical"
			separation={{siblings: 0.9, nonSiblings: 3}}
			textLayout={{textAnchor: "start", x: -20, y: 20 , transform: undefined }}
			onClick={(data, event) => { console.log(data); }}
			nodeSvgShape={{ shape: 'circle',
					shapeProps: { r: 4 }
				      }}
			translate={{ x: 650, y: 100 }}
			/>
		  : "" }
	    </div>
	    );
    }

}
