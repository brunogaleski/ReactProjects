import React from 'react';

export default class Erro extends React.Component {
    constructor(props) {
        super(props);
        this.showErro = this.showErro.bind(this);
    }
    
    showErro(shouldShow) {
        this.props.showErro(shouldShow);
        return;
    }
    
    componentDidMount() {
        setTimeout(() => this.showErro(false), 2000)
    }
    
    render() {
        return (
            <div id={this.props.id}>
    			<div className="alert alert-danger">
    				 {this.props.message}
    			</div>
    		</div>
		)
        
    }
}