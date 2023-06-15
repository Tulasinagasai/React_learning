import React from "react";
 function Hoc(Component) {
    return class AuthenticatedComponent extends React.Component {
        isAuthenticated() {
            
            return this.props.isAuthenticated;
        
        }

        
        render() {
            const loginErrorMessage = (
                <div>
                   Higher Order Component
                </div>
            );

            return (
                <div>
                    { this.isAuthenticated === true ? <Component {...this.props} /> : loginErrorMessage}
                </div>
            );
        }
    };
}

export default Hoc;
