import React, { useState } from 'react'
import Header from '../Header'
import '../../ProjectComponnet/Style.css'

let SStop=undefined
function StopWatch() {
    let [sec, setSec] = useState(0)
    let [Disable,setDisable]=useState(false)

    function start() {
          SStop=setInterval(() => {
            setSec((pre) => pre + 1)
        }, 1000);
        setDisable(true)
    }
    function Stop(){
        clearInterval(SStop)
        setDisable(false)
    }
    function Reset(){
        setSec(0)
        clearInterval(SStop)
        setDisable(false)
    }

    return (
        <div>
            <Header />
            <div className='UpperStopWatch'>
                <h2>Start Stop Watch</h2>
                <h1>{sec}</h1>
                <div className='UpperBtn'>
                    <div className="InnerBtn"><button className='stop' onClick={Stop}>Stop</button></div>
                    <div className="InnerBtn"><button className='start' onClick={start} disabled={Disable}>Start</button></div>
                    <div className="InnerBtn"><button className='reset' onClick={Reset}>Reset</button></div>
                </div>
            </div>
        </div>
    )
}

export default StopWatch
