import React from "react";

// function Greet() {
//     return (
//         <h1>Hello Gayathri</h1>
//     )
// }

// using arrow function
const Greet = (props) => {
    console.log(props)
    return (
        <div>
            <h1>Hello {props.name} and mother name is {props.mothername}</h1>
            {props.children}
        </div>
        
    )
}

export default Greet;
