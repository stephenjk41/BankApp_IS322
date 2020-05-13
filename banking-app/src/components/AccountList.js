import React from 'react';
import { connect } from 'react-redux';
import { removeAccount } from '../actions';
import { switchAccount } from '../actions';

import AddAccount from './AddAccount'; 
import AddTransaction from './AddTransaction';
// import TransactionList from './TransactionList'
// import TransactionList from './TransactionList';

class AccountList extends React.Component {

    renderTransactions() {
        let transactionArr = this.props[this.props.stateList][0].transactions;
        console.log(transactionArr)
        return transactionArr.map(_tran => {
            return <li className="list-group-item" key={_tran._id}>
                <div> {_tran.name}: {_tran.amount}  </div>
            </li>
        })
        
    }
    renderList() {
        let accountArr = this.props[this.props.stateList];


        return accountArr.map(acc => {
            if(acc.status === "selected") {
                return (
                    <li className="list-group-item" key={acc._id}> 
                        <h3>{ acc.name } Account</h3>
                        <div>Account ID: {acc._id}</div>
                        <button type='button'
                                onClick={() => { this.props.removeAccount(acc._id) }}
                                className="btn btn-danger"
                                style={{ float: 'right', margin: "5px" }}>
                                    Delete
                        </button>

                        <button type='button'
                                onClick={() => {  }}
                                className="btn btn-warning"
                                style={{ float: 'right', margin: "5px" }}>
                                    Edit
                        </button>

                        <div className="card" style={{ padding: '10px' }}>
                            <h5>Balance: {acc.balance}</h5>
                            <ul className="list-group" style={{ marginTop: '0px' }}>
                            </ul>
                        </div> 
                        <AddTransaction tittle={this.props.title} 
                                stateList={this.props.stateList} 
                                style={{ float: 'right' }}/>
                    </li>
                );
            } else {
                return (
                    <li className="list-group-item" key={acc._id}> 
                        { acc.name }
                        <button type='button'
                                onClick={() => { this.props.switchAccount(acc._id) }}
                                className="btn btn-success"
                                style={{ float: 'right' }}>
                                    View
                        </button>
                    </li>
                );
            }
            
        });
    }

    render() {

        let accountList = this.renderList();
        let transactionList = this.renderTransactions();
        console.log(this.props)
        if(this.props.title === "Account Overview") {
            return(
                <div className="card" style={{ padding: '10px' }}>
                    <h3>{this.props.title}</h3>
                    
                    <ul className="list-group" style={{ marginTop: '15px' }}>
                       { accountList } 
                    </ul>
                    <ul className="list-group" style={{marginTop: "15px"}}>
                        {transactionList}
                    </ul>
                </div> 
            );
        } else if(this.props.title === "Accounts") {
            return(
                <div className="card" style={{ padding: '10px' }}>
                    <h3>{this.props.title}</h3>
                    <AddAccount tittle={this.props.title} 
                                stateList={this.props.stateList} 
                                style={{ float: 'right' }}/>

                    <ul className="list-group" style={{ marginTop: '15px' }}>
                       { accountList } 
                    </ul>
                </div> 
            );
        }
        
    }
}


const mapStateToProps = state => {
    return {
        accounts: state.accounts.accounts,
        selected: state.accounts.selected,
        not_selected: state.accounts.not_selected,
        transactions: state.accounts.transactions
    }
};

export default connect(mapStateToProps, { removeAccount, switchAccount })(AccountList);
