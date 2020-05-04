import React from 'react';
import { connect } from 'react-redux';

import { addAccount } from '../actions';

class AddAccount extends React.Component {
    state = {name: '', balance: ''}

    onFormSubmit = (event) => {
        event.preventDefault();

        this.props.addAccount(this.state.name, this.state.balance, "not_selected",);
        this.setState({name: '', balance:''})
    }

    render() {
        return(
            <form onSubmit={this.onFormSubmit}>
                <div className="form-group">
                    <label>Name</label>
                    <input type="text" className="form-control"
                           name="name" value={this.state.name}
                           onChange={(e) => this.setState({name: e.target.value})} />
                </div>

                <div className="form-group">
                    <label>Starting Balance</label>
                    <input type="number" className="form-control"
                           name="balance" value={this.state.balance}
                           onChange={(e) => this.setState({balance: e.target.value})} />
                </div>

                <input type="submit" className="btn btn-success" value={'Add Account'}/>
            </form>
        )
    }
}

export default connect(null, {addAccount})(AddAccount);