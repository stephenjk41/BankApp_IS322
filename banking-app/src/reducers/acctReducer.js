const sortAccounts = (state) => {
    let newState = {
        accounts: [...state.accounts],
        transactions: [...state.transactions],
        selected: [],
        not_selected: []
    };

    newState.accounts.forEach(account => {
        if (account.status === "selected") {
            newState.selected.push(account);
        } else if (account.status === "not_selected") {
            newState.not_selected.push(account);
        };
    })

    newState.transactions.forEach(transaction => {
        if (transaction.accountId === newState.selected[0]._id) {
            newState.selected[0].transactions.push(transaction);
        }
    })

    const seen = new Set();
    const filteredArr = newState.selected[0].transactions.filter(el => {
        const duplicate = seen.has(el._id);
        seen.add(el._id);
        return !duplicate;
    })

    newState.selected[0].transactions = filteredArr;

    return newState;
};

const acctReducer = (state = [], action) => {
    switch (action.type) {

        case 'SET_ACCOUNT':
            return action.payload;

        case 'ADD_ACCOUNT':
            let account = action.payload;
            account._id = state.accounts.length + 1;
            state.accounts.push(account);
            return sortAccounts(state);

        case 'REMOVE_ACCOUNT':
            const accountIndex_remove = state.accounts.findIndex(acc => {
                return acc._id === action.payload;
            });
            state.accounts.splice(accountIndex_remove, 1);
            return sortAccounts(state);

        case 'EDIT_ACCOUNT':
            let accountIndex_edit = state.findIndex(acc => acc._id == action.payload['accountId']);
            state[accountIndex_edit]['name'] = action.payload['name'];
            return state;

        case 'SWITCH_ACCOUNT':
            const accountIndex_switch = state.accounts.findIndex(acc => {
                return acc._id === action.payload;
            })
            state.accounts.forEach(acc => {
                acc.status = "not_selected";
            });
            state.accounts[accountIndex_switch].status = "selected";
            return sortAccounts(state);

        case 'DEPOSIT':
            let accountIndex_deposit = state.findIndex(acc => acc._id == action.payload['accountId']);
            var newAmount = parseFloat(state[accountIndex_deposit]['balance']) + parseFloat(action.payload['amount']);
            state[accountIndex_deposit]['balance'] = newAmount.toFixed(2);
            return state;

        case 'WITHDRAW':
            let accountIndex_withdraw = state.findIndex(acc => acc._id == action.payload['accountId']);
            var newAmount2 = parseFloat(state[accountIndex_withdraw]['balance']) - action.payload['amount']
            state[accountIndex_withdraw]['balance'] = newAmount2.toFixed(2);

            return state;

    }
}

export default acctReducer;