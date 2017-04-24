import React from 'react';
import {TodoItem} from './TodoItem';

export default class TodoList extends React.Component{
	removeNode(nodeId) {
		this.props.removeNode(nodeId);
		return;
	}
    
	toggleComplete(nodeId) {
		this.props.toggleComplete(nodeId);
		return;
	}
    
	render() {
		var listNodes = this.props.data.map((listItem) => {
			return (
				<TodoItem key={listItem.id} nodeId={listItem.id} task={listItem.task} complete={listItem.complete} removeNode={this.removeNode} toggleComplete={this.toggleComplete} />
			);
		},this);
		return (
			<ul className="list-group">
				{listNodes}
			</ul>
		);
	}
};
