//1
import React from "react";


//2
const SmurfsCard = (props) =>{
    const updateHandler = e => {

    }
    const deleteHandler = e => {

    }
    return (
        <div>
           <h2>{props.smurf.name}</h2>
           <h3>{props.smurf.age}</h3>
           <h3>{props.smurf.height}</h3>
           <button onClick={updateHandler}> Update Smurf!</button>
           <button onClick={deleteHandler}> Delete Smurf!</button>
        </div>
    )
}

//3
export default SmurfsCard