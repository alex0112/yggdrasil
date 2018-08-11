import React, {Component} from 'react';

import Tree from 'react-d3-tree';

const myTreeData = [
  {
    name: 'Top Level',
    children: [
      {
        name: 'Level 2: A'
      },
      {
        name: 'Level 2: B'
      },
    ]
  },
];
console.log(myTreeData);

export default class Yggdrasil extends Component {
    render() {
	return (
	    <div>
	      <Tree data={myTreeData} orientation='vertical' />
	      {JSON.stringify(myTreeData)}
	    </div>
	    );
    }
}
