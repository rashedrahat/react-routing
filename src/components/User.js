import React from "react";
import {users} from './Users';

class User extends React.Component {
    render() {
        return (
            <>
                <code>User with associated info: {JSON.stringify(this.props.match)}</code>
                <h3>User with associated id: {this.props.match.params.userId}</h3>
                <h3>User with associated name: {users[this.props.match.params.userId - 1].name}</h3>
                {/*<h3>User with associated name: {JSON.stringify(this.props.location)}</h3>*/}
            </>
        );
    }
}

// Or you can do this same above thing with Function.

// const User = ({ match, location }) => {
//     return (
//         <>
//             <p>
//                 <strong>Match Props: </strong>
//                 <code>{JSON.stringify(match, null, 2)}</code>
//             </p>
//             <p>
//                 <strong>Location Props: </strong>
//                 <code>{JSON.stringify(location, null, 2)}</code>
//             </p>
//         </>
//     );
// };

export default User;