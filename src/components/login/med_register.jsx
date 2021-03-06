import React from "react";

export class Register extends React.Component {

    constructor(props) {
        super(props);
    }
    render() {
        return (
         <div className="base-container" ref={this.props.containerRef}>
            <div className="header">Do you want to be a Good Samaritan? Register with us</div>
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
                    <lable htmlFor="Country"> Country </lable>
                    <input type="text" name="Country" placeholder="Country of Origin"></input>
                </div>
                <div className="dropdown">
                    <label htmlFor="Gender">Gender</label>
                    <select className = "dropdown-content">
                        <option value ="Male" > Male</option>
                        <option value ="Female">Female</option>
                    </select>

                </div>
                <div className ="form-group">
                    <label htmlFor="Medical ID">Medical ID</label>
                    <input type="text" name="medicalID" placeholde="Medical ID"></input>
                </div>
                <div className ="form-group">
                    <label htmlFor="speciality">Speciality</label>
                    <input type="text" name="speciality" placeholde="Speciality"></input>
                </div>

                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" placeholder ="password" />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Confirm Password</label>
                    <input type="password" name="password" placeholder ="password" />
                </div>

                <div className= "footer">
                    <button type="button" className="btn">
                       Register/Sign Up
                    </button>
                </div>
            </div>
         </div>
        </div>
        );
    }
}