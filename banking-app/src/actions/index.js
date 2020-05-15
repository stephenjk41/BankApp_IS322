import 'bootstrap/dist/css/bootstrap.min.css';
export const addAccount = (name, balance, status) => {
    return{
        type: 'ADD_ACCOUNT',
        payload: {
            name, balance, status
        }
    };
};

export const removeAccount = (accountId) => {
    return {
        type: 'REMOVE_ACCOUNT',
        payload: accountId
    }
}

export const switchAccount = (accountId) => {
    return {
        type: 'SWITCH_ACCOUNT',
        payload: accountId
    }
}

export const editBalance = (accountId) => {
    return {
        type: 'EDIT_BALANCE',
        payload: accountId
    }
}

export const addTransaction = (name, type, amount) => {
    return {
        type: 'ADD_TRANSACTION',
        payload: {
            name, type, amount
        }
    }
}

