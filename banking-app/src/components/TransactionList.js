// import React from 'react';
// import { connect } from 'react-redux';


// class TransactionList extends React.Component {
//     renderList() {
//         let transactionArr = this.props[this.props.stateList];
//         console.log(this.props[this.props.stateList])
//         return transactionArr.selected[0].transactions.map(tran => {
//                 return (
//                     <li className="list-group-item" key={tran._id}> 
//                         <h3>{ tran.title}</h3>
                        
//                     </li>
//                 );  
//         });
//     }

//     render () {
//         let transactionList = this.renderList()
//             return(
//                 <div className="card" style={{ padding: '10px' }}>
                    
//                     <ul className="list-group" style={{ marginTop: '15px' }}>
//                        { transactionList } 
//                     </ul>
//                 </div> 
//             );
// }
// }

// const mapStateToProps = state => {
//     return {
//         accounts: state.accounts.accounts,
//         selected: state.accounts.selected,
//         not_selected: state.accounts.not_selected,
//         transactions: state.accounts.transactions
//     }
// };

// export default connect(mapStateToProps)(TransactionList);