import React, {Component} from 'react';

import Tree from 'react-d3-tree';
//import axios from 'axios';
import http from 'http';

function getData(url) {
    url = encodeURIComponent(url); 
    const obj = {};
    
    console.log(`localhost:3000/api/trees/${url}`);
    return axios.get(`localhost:3000/api/trees/${url}`)
	.then(function (response) {
	    for (let e in response.data) {
		obj.name = response.name;
		obj.children = e;
	    }
	    return obj;
	})
	.catch(function (error) {
	    console.log(error);
	}).data;
}

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

const myTreeData = getData('https://en.wikipedia.org/wiki/Perl');
console.log(myTreeData);
//    <Tree data={myTreeData} orientation='vertical' />

export default class Yggdrasil extends Component {
    render() {
	return (
	    <div>
	      {myTreeData}
	    </div>
	);
    }
}
