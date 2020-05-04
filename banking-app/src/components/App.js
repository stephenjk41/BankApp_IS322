import React from 'react';

import AccountList from './AccountList';


const App = () => {
    return (
        <div className="container" style={{marginTop: '15px'}}>
            <div className="row">
                <div className="col-sm-7">
                <AccountList title="Account Overview" stateList="selected"></AccountList>
                </div>

                <div className="col-sm-5">
                    <AccountList title="Accounts" stateList="not_selected"></AccountList>
                </div>
            </div>
        </div>
    );
}

export default App;