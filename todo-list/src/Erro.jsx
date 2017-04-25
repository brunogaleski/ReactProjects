import React from 'react';

export default class Erro extends React.Component {
     constructor(props) {
        super(props);
        this.bsClass = "alert alert-danger"
        var myVar = setInterval(this.hide(), 6000); 
        
        this.hide = this.hide.bind(this);
     }
    
    hide() {
        this.bsClass = "alert alert-danger"
    }
    render() {
        return (
            <div id={this.props.id}>
    			<div className={this.bsClass}>
    				 {this.props.message}
    			</div>
    		</div>
		)
        
    }
}