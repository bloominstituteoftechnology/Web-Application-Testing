import React from 'react'
import Display from './Display'

const Dashboard = props => {
    const [strike, setStrikes] = useState(0)
    const [ball, setBall] = useState(0)
    const [hit, setHit] = useState(false)
    
    const strike = () => {

        if (strikes === 3) {
            strikes = 0
            return (<Display strikes={strikes} />)
        }
        else {
            strikes = strikes + 1
            return (< Display strikes={strikes} />)

        }
    }

    return (<div><button onClick={strike}>Strike</button><button>Ball</button><button>foul</button><button>HIT</button></div>)
}

export default Dashboard