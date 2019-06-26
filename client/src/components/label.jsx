import React, {Component} from 'react';

export default class Label extends Component {

    constructor(props) {
        super(props);
        this.nodeData = props.nodeData;
        this.nodeName = this.nodeData.name;
        this.nodeClass = this.computeNodeClass(this.nodeData.index);
    }

    computeNodeClass(index) {
        if (index === 0) {
            return '.root-node-label';
        }
        else if (index % 2 === 0) {
            return '.even-node-label';
        }
        else if (index % 2 !== 0) {
            return '.odd-node-label';
        }
        else {
            console.warn(`Expected node index to be an even/odd/zero number but instead got ${index}.\nDefaulting to .even-node-label...`);
            return '.even-node-label';
        }
        
    }
    
    render() {
        return (
            <span className={this.nodeClass}>{this.nodeName}</span>
        );
    }
}
