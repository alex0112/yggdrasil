import React, {Component} from 'react';

import Tree from 'react-d3-tree';
import Label from './label';

//  <Tree /> expects data in this form:

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
//   };


export default class Yggdrasil extends Component {

    constructor(props) {
        super(props);
        this.labelHandler = this.handler.bind(this);
        this.state = {
            even: { x: 10,  y: 10  },
            odd:  { x: 100, y: 0   },
            root: { x: -10, y: -30 },
            foreignObject: {
                render: <Label onRender={this.labelHandler} />,
                foreignObjectWrapper: {
                    x: 0,
                    y: 0
                }
            }
        };
    }

    componentDidMount() {
	    const dimensions = this.container.getBoundingClientRect();
	    this.setState({
	        translate: {
		        x: dimensions.width / 2,
		        y: dimensions.height / 10
	        }
	    });
    }

    async handler(index) {
        const positioning = await (index === 0 ? this.state.root : index % 2 === 0 ? this.state.even : this.state.odd);

        const foreignObject = 
              await {
                  render: <Label onRender={this.handler}/>,
                  foreignObjectWrapper: {
                      x: positioning.x,
                      y: positioning.y
                  }
              };

        // setState batches state changes, they do not happen immediately after
        // the function call
        // which is why the state isn't being updated until after the
	// entire tree renders.  Giving it only the initial coordinate
	// values for foreignObjects
        
        await this.setState({
            foreignObject: foreignObject
        }, () => { console.log(this.state.foreignObject.foreignObjectWrapper); });
    }
    
    render() {
        return (
	    <div id='container' ref={tc => (this.container = tc)}>
	      {this.props.data.length !== 0 ?
		  <Tree
                allowForeignObjects
                nodeLabelComponent={this.state.foreignObject}
			    data={this.props.data}
			    orientation="vertical"
		        separation={{siblings: 0.7, nonSiblings: 3}}
		        onClick={this.clickHandler}
			    nodeSvgShape={{
                    shape: 'circle',
					shapeProps: { r: 4 }
				}}
			    translate={this.state.translate}
			    />
		  : "" }
	    </div>
	    );
    }
    
}
