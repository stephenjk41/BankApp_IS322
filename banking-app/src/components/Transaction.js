import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

import AccountList from './AccountList'
import {setTransaction} from '../actions'

class App extends React.Component{

    componentDidMount (){
        this.getData();
    }

    getData(){
        axios.get('http://my-json-server.typicode.com/bnissen24/project2DB/transactions')
        .then(response => {
            this.props.addTransaction(response.data);
        }).catch(error => {
            this.setState({errorMessage: error.message});
        });
    }

    render(){
        <div className="container">
            <TransactionList/>
        </div>
    };

}
const mapStateToProps = state => {
    return {
        transactions: state.accounts.transactions

    };
};

export default connect(mapStateToProps, {addTransaction})(App);