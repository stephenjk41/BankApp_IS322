import React from 'react';
import { connect } from 'react-redux';

class AccountList extends React.Component {

    renderList() {
        let transactionArr = this.props[this.props.stateList];

        // return accountArr.map(acc => {
        //     if(acc.status === "selected") {
        //         return (
        //             <li className="list-group-item" key={acc._id}> 
        //                 <h3>{ acc.name }</h3>
                        
        //                 <button type='button'
        //                         onClick={() => { this.props.removeAccount(acc._id) }}
        //                         className="btn btn-danger"
        //                         style={{ float: 'right', margin: "5px" }}>
        //                             Delete
        //                 </button>

        //                 <button type='button'
        //                         onClick={() => {  }}
        //                         className="btn btn-warning"
        //                         style={{ float: 'right', margin: "5px" }}>
        //                             Edit
        //                 </button>

        //                 <div className="card" style={{ padding: '10px' }}>
        //                     <h5>Balance: {acc.balance}</h5>
        //                     <ul className="list-group" style={{ marginTop: '15px' }}>
        //                      </ul>
        //                 </div> 
        //             </li>
        //         );
        //     } else {
        //         return (
        //             <li className="list-group-item" key={acc._id}> 
        //                 { acc.name } - { acc.balance }
        //                 <button type='button'
        //                         onClick={() => { this.props.switchAccount(acc._id) }}
        //                         className="btn btn-success"
        //                         style={{ float: 'right' }}>
        //                             View
        //                 </button>
        //             </li>
        //         );
        //     }
            
        // });
    }

    render() {

        // let transactionList = this.renderList();

        console.log(this.props[this.props.stateList])
        return(
            <div>Transaction</div>
        );
        // return(
        //  <div className="card" style={{ padding: '10px' }}>
        //      <h3>{this.props.title}</h3>
        //      <ul className="list-group" style={{ marginTop: '15px' }}>
        //         { transactionList } 
        //      </ul>
        //  </div> 
        // );
    }
}
