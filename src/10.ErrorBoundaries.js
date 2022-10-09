import React from 'react';

/*
    Create an ErrorBoundary class component that provides a fallback UI in the event an error occurs.
 */

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        // Change to true to enable error
        this.state = { hasError: false };
    }
    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(err, errInfo) {
        console.log('something went horribly wrong', err, errInfo);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="error-boundary">
                    <h3>Fallback UI</h3>
                </div>
            );
        }
        return this.props.children;
    }
}

function ErroneousComponent() {
    throw 'Very evil error';
    return (
        <div>
            <h3>Error</h3>
        </div>
    )
}

export  {ErrorBoundary, ErroneousComponent};