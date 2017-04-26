import React from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import Erro from './Erro';

export default class TodoBox extends React.Component {
     constructor(props) {
        super(props);
            this.state = {
                data: [
                    {"id":"00001","task":"Wake up","complete":"false"},
                    {"id":"00002","task":"Eat breakfast","complete":"false"},
                    {"id":"00003","task":"Go to work","complete":"false"}
			    ],
				showErro: false
            }
            
            ;
            
			this.generateId = this.generateId.bind(this);
			this.handleNodeRemoval = this.handleNodeRemoval.bind(this);
			this.handleSubmit = this.handleSubmit.bind(this);
			this.handleToggleComplete = this.handleToggleComplete.bind(this);
			this.taskAlreadyexists = this.taskAlreadyexists.bind(this);
			this.showErro = this.showErro.bind(this);
     }
     
    showErro(shouldShow) {
		var showErro = this.state.showErro;
		showErro = shouldShow;
		this.setState({showErro});
	}
	
	generateId() {
		return Math.floor(Math.random()*90000) + 10000;
	}

	taskAlreadyexists(newTask){
		var ret = false;
		var data = this.state.data;
		data.forEach((task) => {
			if(task.task === newTask){
			    ret = true;
			}
			
		})
		return ret;
	}
	
	handleNodeRemoval(nodeId) {
		var data = this.state.data;
		data = data.filter((el) => {
			return el.id !== nodeId;
		});
		this.setState({data});
		return;
	}

	handleSubmit(task) {
		if(!this.taskAlreadyexists(task)){
			var data = this.state.data;
			var id = this.generateId().toString();
			var complete = 'false';
			data = data.concat([{id, task, complete}]);
			this.setState({data});
		}
		else
			this.showErro(true)
	}

	handleToggleComplete(nodeId) {
		var data = this.state.data;
		for (var i in data) {
			if (data[i].id === nodeId) {
				data[i].complete = data[i].complete === 'true' ? 'false' : 'true';
				break;
			}
		}
		this.setState({data});
		return;
	}

	render() {
		var tagErro = <Erro id="alreadyExists" message="This task already exists" showErro={this.showErro}/> ;
		var erro = this.state.showErro ? tagErro : '';
		return (
			<div className="well">
				<h1 className="vert-offset-top-0">To do:</h1>
				<TodoList data={this.state.data} removeNode={this.handleNodeRemoval} toggleComplete={this.handleToggleComplete} />
				<TodoForm onTaskSubmit={this.handleSubmit} />
				<br />
				{erro}
			</div>
		);
	}
};
