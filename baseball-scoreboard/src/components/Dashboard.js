import React from 'react';
// import Button from './Button';

export function Dashboard() {
    return (
        <div className='buttons'>
            <ChangeButton
            name='Strike'
            value={props.strikes}
            strike={props.strikes}
            />
        </div>
    )
}

    // import React from 'react';

    // function Dashboard({ buttonFunctions }) {
    //     const labels = ['Strike', 'Ball', 'Foul', 'Reset'];
    //     return (
    //         Object.values(buttonFunctions)
    //             .map((button, i) => <button key={i} onClick={button}>{labels[i]}</button>)
    //     );
    // }

export default Dashboard