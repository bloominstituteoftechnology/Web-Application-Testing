import React from 'react';
const Display = props =>{
    const { balls, strikes, fouls } = props;
    return(
        <div>
            <div className='display-head'>
                <h1>Batter Up</h1>
            </div>
            <div className='count-board'>
                <div className='balls'>
                    <div>
                        <h2 className='ball-count' data-testid='balls'>{ balls }</h2>
                    </div>
                    <h3 className='balls'> Balls </h3>
                </div>
                <div className='strikes' >
                    <div>
                        <h2 className='strike-count' data-testid='strikes'>{ strikes }</h2>
                    </div>
                    <h3> Strikes </h3>
                </div>   
            </div>
            <div className='foul-board'>
                <h4 className='fouls'>Fouls: {fouls}</h4>
            </div>
        </div>
    )
}
export default Display;