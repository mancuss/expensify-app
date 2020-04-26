// higher order component (HOC) a component ther renders another component
//reuse coide
//render hijaking
//prop manipulation
// abstract state

import React from 'react'
import ReactDOM from 'react-dom'

const Info = (props) => ( // normal component
    <div>
        <h1>Info</h1>
        <p>The info is: {props.info}</p>
    </div>
)

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>This is private info please dont share!</p>}
            
            <WrappedComponent {...props}/>
        </div>
    )
}

//require authentication

const requireAuthentication = (WrappedComponent) => { // THIS is not the HOC this is a regular function that RETURNS a HOC
    return (props) => (
        <div>
            {props.isAuthenticated ? (
                <WrappedComponent {...props}/>
                ) : (
                    <p>Please authenticate</p>
                )
            }
        </div>
    )
}

const InfoComponent = withAdminWarning(Info) // higher order component
const AuthInfo = requireAuthentication(Info)

ReactDOM.render(<AuthInfo isAuthenticated={true} info="This is info prop" />, document.getElementById('app'))
