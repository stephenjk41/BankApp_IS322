import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';


import {addAccount} from '../actions'

class App extends React.Component{

    componentDidMount (){
        this.getData();
    }

    getAccountData(){
        let accounts = []
        axios.get('http://my-json-server.typicode.com/bnissen24/project2DB/accounts')
        .then(response => {
            accounts = response.data
        }).catch(error => {
            this.setState({errorMessage: error.message});
        });

        return accounts;
    }

    getTransactionData(){
        let transactions = []
        axios.get('http://my-json-server.typicode.com/bnissen24/project2DB/transactions')
        .then(response => {
            transactions = response.data
        }).catch(error => {
            this.setState({errorMessage: error.message});
        });
        return transactions;
    };




    sendData() {
        return ({accounts: this.getAccountData(),
                 transactions: this.getTransactionData(),
                selected: [],
            not_selected: []});
    }

}
const mapStateToProps = state => {
    return {
        accounts: state.accounts.addAccounts

    };
};

export default connect(mapStateToProps, {addAccount})(App);
