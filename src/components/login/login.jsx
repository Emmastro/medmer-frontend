import React from "react";

export class Login extends React.Component {

    constructor(props) {
        super(props);
    }
    render() {
        return (
        <div className="base-container" ref={this.props.containerRef}>
            <div className="header"> MEDMER </div>
            <div className="header">Patient Log in</div>
                <div className="content">
       
            <div className="form">
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" placeholder ="username" />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" placeholder ="password" />
                </div>
                                
                <div className= "footer">
                    <button type="button" className="btn">
                        Login
                    </button>
                </div>
            </div>
        </div>
            
        </div>
        );
    }
}