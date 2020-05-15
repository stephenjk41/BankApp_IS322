import React from 'react';
import { connect } from 'react-redux';
// import axios from 'axios';


import { addTransaction } from '../actions';

class AddTransaction extends React.Component {
    state = {name: '', amount:'', type: ''}

    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.addTransaction(this.state.name, this.state.type, this.state.amount);
        this.setState({name: '', amount:'', type: ''})
    
    }


    render() {
        return(
            <form onSubmit={this.onFormSubmit}>
                <div className="form-group">
                    <label>Title</label>
                    <input type="text" className="form-control"
                           name="name" value={this.state.name}
                           onChange={(e) => this.setState({name: e.target.value})} />
                </div>
            
                <div className="form-row">
                    <label>Amount</label>
                <div className='input-group'>
                    <span className="input-group-addon">$</span>
                    <input type="number" 
                           className="form-control currency" 
                           data-number-to-fixed="2"
                           min='0'
                           step='any'
                           name="amount" value={this.state.amount}
                           onChange={(e) => this.setState({amount: e.target.value})} />
                </div>
                </div>

                <div className="form-group form-check form-check-inline">
                    <input className="form-check-input" 
                           type="checkbox" 
                           id="inlineCheckbox1" 
                           value={this.state.type}
                           onChange={(e) => this.setState({type:"deposit"})}/>
                    <label className="form-check-label" htmlFor="inlineCheckbox1">Deposit</label>
                </div>

                <div className="form-group  form-check form-check-inline">
                    <input className="form-check-input" 
                           type="checkbox" 
                           id="inlineCheckbox2" 
                           value={this.state.type}
                           onChange={(e) => this.setState({type:'withdraw'})}/>
                    <label className="form-check-label" htmlFor="inlineCheckbox2">Withdraw</label>
                </div>
            

                <input type="submit" className="btn btn-success" value={'Complete'}/>
            </form>
        )
    }
}

export default connect(null, {addTransaction})(AddTransaction);