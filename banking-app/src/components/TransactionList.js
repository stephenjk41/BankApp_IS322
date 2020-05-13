import React from 'react';
import { connect } from 'react-redux';


class TransactionList extends React.Component {
    render () {
        return(
            <div className="card" style={{ padding: '10px' }}>
                <h3>{this.props.title}</h3>
                <ul className="list-group" style={{ marginTop: '15px' }}>
                    hello world
                </ul>
            </div> 
        )
    }
}