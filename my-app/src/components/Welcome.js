import React, { Component } from 'react'

class Welcome extends Component {
    render() {
        const { name, children } = this.props;
        return (
            <>
                <h2>Welcome to {name}</h2>
                <p>{children}</p>
            </>
        )
    }
}

export default Welcome
