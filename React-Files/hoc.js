
// Higher Order Component (HOC) - A component (HOC) that renders another component
// Reuse code
// Render hijacking
// Prop manipulation
// Abstract state

import React from 'react';
import ReactDOM from 'react-dom';

// SIMPLE COMPONENT
const Info = (props) => (
    <div>
        <h1>Information</h1>
        <p>This info is : {props.info} </p>
    </div>
);

// HOC COMPONENT 
const withAdminWarn = (WarppedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <h1>ADMIN PANEL : PRIVATE DATA</h1>}
            <WarppedComponent {...props} />
        </div>
    );
}

const AdminInfo = withAdminWarn(Info);
ReactDOM.render(<AdminInfo info='795001' isAdmin={false} />, document.getElementById('root'));

