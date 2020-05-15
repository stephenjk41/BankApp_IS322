import React from 'react';
// import axios from 'axios';

import AccountList from './AccountList';

// const View = () => {
//     return (
//         <div>
//         <Media queries={{
//           phone: "(max-width: 411px)",
//           small_desktop: "(min-width: 768px) and (max-width: 1024px)",
//           large_desktop: "(min-width: 1366px)",
//           tablet: "(max-width: 768)"
//         }}>
//           {matches => (
//             <Fragment>
//               {matches.Phone && <p>I am Phone</p>}
//               {matches.small_desktop && <p>I am medium!</p>}
//               {matches.large_desktop && <p>I am large!</p>}
//               {matches.tablet && <p>I am Tablet</p>}
//             </Fragment>
//           )}
//         </Media>
//       </div>
//     )
// }

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