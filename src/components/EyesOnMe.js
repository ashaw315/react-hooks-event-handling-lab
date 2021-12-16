
import React from "react";

function EyesOnMe() {
    
    function handleDumb() {
        console.log('Good!');
    }

    function handleDumber () {
        console.log("Hey! Eyes on me!");
    }
    

    return  (
        <button onFocus={handleDumb} onBlur={handleDumber}>
        Eyes on me
        </button>
    );
}

export default EyesOnMe;