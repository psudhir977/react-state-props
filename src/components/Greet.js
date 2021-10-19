import React, { Component } from 'react'

/*function Greet () {
    
        return (
            <div>
               "HELLO SUDHIR" 
            </div>
        )
    
}*/

const Greet = (props) => {
    console.log(props)
    return ( 
    
    <div>
    <h1>HELLO {props.name} {props.hero}</h1>
    {props.children}
    </div>
    )
}

//Properties can be passed as object and can be retrieved as above
// unknown properties can also be retrieved like above as {props.children}

export default Greet
