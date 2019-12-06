import React from 'react';

const Display = ({strike, ball}) => {

    return (
        <div className = 'display-container'>
            
                <div className= 'type'>
                    <div className='title'>
                        <h4>Strike</h4>
                    </div>
                    <div className = 'numbers'>
                        <h4>{strike}</h4>
                    </div>
                    
                </div>
                <div className = 'type'>
                    <div className = 'title'>
                        <h4>Ball</h4>
                    </div>
                    <div className = 'numbers'>
                        <h4>{ball}</h4>
                    </div>
                    
                </div>
            
        </div>
    )
}

export default Display;