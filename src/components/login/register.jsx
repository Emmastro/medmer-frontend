import React from "react";
import { registerUser } from "../../services";

export class Register extends React.Component {

    handleRegister = async (e) => {
        e.preventDefault();
        await registerUser(e);
     }

    render() {
        return (
         <div className="base-container" ref={this.props.containerRef}>
            <div className="header">Are you in need of help? Register with us</div>
             <div className="content">
             
            <div className="form">
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" placeholder ="username" />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" placeholder ="email" />
                </div>
                <div className= "form-group">
                    <label htmlFor="Country"> Country </label>
                    <input type="text" name="Country" placeholder="Country of Origin"></input>
                </div>
                <div className="dropdown">
                    <label htmlFor="Gender">Gender</label>
                    <select className = "dropdown-content">
                        <option value ="Male" > Male</option>
                        <option value ="Female">Female</option>
                    </select>

                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" placeholder ="password" />
                </div>
                <div className= "footer">
                    <button type="submit" className="btn">
                       Register
                    </button>
                </div>
            </div>
         </div>
        </div>
        );
    }
}