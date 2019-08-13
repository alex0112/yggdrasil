import React, {Component} from 'react';

export default class Label extends Component {
    
    constructor(props) {
        super(props);
        this.nodeData = props.nodeData;
        this.nodeName = this.nodeData.name;

        props.onRender(props.nodeData.index);
    }

    render() {
        return (
            <div className=".node-label">
              <span className={this.nodeClass}>{this.nodeName}</span>
            </div>
        );
    }
}
