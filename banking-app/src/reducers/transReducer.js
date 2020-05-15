const transReducer = (state = [], action) => {
    switch (action.type) {

        case 'SET_TRANSACTIONS':
            return action.payload;

        case 'ADD_TRANSACTION':
            let transaction = action.payload;
            transaction._id = state.transactions.length + 1;
            transaction.accountId = state.selected[0]._id;
            state.transactions.push(transaction);

            return (state);

        case 'DEPOSIT_t':
            let accountIndex = state.findIndex(account => account._id == action.payload['accountId']);

            var newTransaction = {
                "_id": action.payload['transactionId'],
                "accountId": accountIndex + 1,
                "type": action.payload['type'],
                "amount": action.payload['amount'],
                "name": action.payload['name']
            }

            state.push(newTransaction);

            return state;

        case 'WITHDRAW_t':

            let accountIndex_t = state.findIndex(account => account._id == action.payload['accountId']);

            var newTransaction_t = {
                "_id": action.payload['transactionId'],
                "accountId": accountIndex_t + 1,
                "type": action.payload['type'],
                "amount": action.payload['amount'],
                "name": action.payload['name']
            }

            state.push(newTransaction_t);

            return state;

        default:
            return state;
    }
}

export default transReducer;