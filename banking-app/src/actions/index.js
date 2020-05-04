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