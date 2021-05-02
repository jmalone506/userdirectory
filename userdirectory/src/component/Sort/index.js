import React, { useState } from "react";
import "./.css"

function (){
    return(
        <div>
            <li className="state">
                <label>Select State:</label>
                <select>
                    <option>All Employees:</option>
                    <option>California:</option>
                    <option>Arizona:</option>
                    <option>Nevada:</option>
                </select>

            </li>
            <li className="lastName">
                <label>Sort By Last Name:</label>
                <select>
                    <option>Ascending (A-Z)</option>
                    <option>Decending (Z-A)</option>
                </select>
            
            </li>

        </div>
    )
}

export default ;