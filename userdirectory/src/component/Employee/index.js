import React from "react";
import "../Employee/style.css";

const Employee = (props) =>{
    return(
        <div className="container">
            <div className="row">
            <div className="col">
            <div className="card">
            <div className="img-conatainer">
                <img alt={props.name} src={props.picture}/>
                </div>
                <div className="info">
                    <ul>
                        <li>
                            <strong>Employee Name:</strong> {props.name}
                        </li>
                        <li>
                            <strong>Employee Phone:</strong>{props.phone}
                        </li>
                    <li>
                        <strong>Employee Location:</strong>{props.location}                    
                    </li>
                    <li>
                        <strong>Employee Email:</strong>{props.email}
                    </li>
                    </ul>
                </div>
                </div>
                </div>
            </div>
        </div>
    )
}
export default Employee;