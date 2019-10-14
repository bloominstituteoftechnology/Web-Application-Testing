import React from 'react';

function Dashboard({ buttonFunctions }) {
    const labels = ['Strike', 'Ball', 'Foul', 'Reset'];
    return (
        // object.value takes in the value of the object {buttonFunctions}. These objects are functions being passed in. (button)  function
        Object.values(buttonFunctions)
            .map((button, i) => <button key={i} onClick={button}>{labels[i]}</button>)
    );
}


export default Dashboard