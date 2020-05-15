import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

import AccountList from "./AccountList";
import {addAccount} from '../actions'

class App extends React.Component{

    componentDidMount (){
        this.getData();
    }

    getData(){
        axios.get('http://my-json-server.typicode.com/bnissen24/project2DB/accounts')
        .then(response => {
            return response.data
        }).catch(error => {
            this.setState({errorMessage: error.message});
        });
    }

    render(){
        <div className="container">
            <AccountList/>
        </div>
    };

}
const mapStateToProps = state => {
    return {
        accounts: state.accounts.addAccounts

    };
};

export default connect(mapStateToProps, {addAccount})(App);
