import React from 'react';

class HomePage extends React.Component {
    static handleClick() {
        const email = document.getElementById( 'user-email' ).value;
        const accessEl = document.getElementById( 'user-access' );
        const access = accessEl.options[ accessEl.selectedIndex ].value;
        const xhr = new XMLHttpRequest();
        xhr.open( "PUT", "/api/user/add", true );
        xhr.onload = function() {
            if( xhr.readyState === 4 ) {
                if( xhr.status === 200 ) {
                    console.log( xhr.responseText );
                } else {
                    console.error( xhr.statusText );
                }
            }
        };
        xhr.onerror = function() {
            console.error( xhr.statusText );
        };
        xhr.setRequestHeader( 'Content-type', 'application/json' );
        xhr.send( JSON.stringify( {
            email,
            access,
            state: 'invited'
        } ) );
    }

    render() {
        return <div>
            <h1>User Accounts</h1>
            <h3>Add New User(s)</h3>
            <input id="user-email" type="text" placeholder="Enter one or more emails"/>
            <select id="user-access" title="Access Level">
                <option disabled selected>Select Access</option>
                <option value="Full">Full</option>
                <option value="Limited">Limited</option>
                <option value="Read">Read</option>
            </select>
            <button type="button" onClick={ HomePage.handleClick }>Send Invites</button>
        </div>;
    }
}

export default HomePage;
