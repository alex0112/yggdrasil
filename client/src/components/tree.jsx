import React, {Component} from 'react';

import Tree from 'react-d3-tree';
import Label from './label';

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
    state = {}
    
    componentDidMount() {
	const dimensions = this.container.getBoundingClientRect();
	this.setState({
	    translate: {
		x: dimensions.width / 2,
		y: dimensions.height / 10
	    }
	});
    }

    
    render() {
	return (
	    <div id='container' ref={tc => (this.container = tc)}>
	      {this.props.data.length !== 0 ?
		  <Tree
                allowForeignObjects
                nodeLabelComponent={{
                    render: <Label className='' />
                }}
			data={this.props.data}
			orientation="vertical"
			separation={{siblings: 0.9, nonSiblings: 3}}
			//textLayout={{textAnchor: "start", x: -20, y: 20 , transform: undefined }}
			onClick={(data, event) => { console.log(data); }}
			nodeSvgShape={{ shape: 'circle',
					shapeProps: { r: 4 }
				      }}
			translate={this.state.translate}
			/>
		  : "" }
	    </div>
	    );
    }

}
