import React, { useState } from "react";
import Header from "../Header";
import { Button } from "react-bootstrap";

function SetMatch() {
    let Game = ['Cricket', 'FootBall', 'Tennis']
    let Day = ['WeekDay', 'WeekEnd']


    let [game,sGame]=useState('')
    let [day,sDay]=useState('')
    let [disable,setDisable]=useState(false)

    function ConfirmGame(){
        setDisable(true)
    }

    return (
        <>
            <Header />
            <div className="UpperStopWatch">
                <h1>Set Your Match</h1>

                {/* Chose Your Game */}

                <h3>Chose Your Game</h3>
                {
                    Game.map((item, i) =>
                        <div key={i}>
                            <label>
                                &nbsp; &nbsp; &nbsp;
                                <input disabled={disable} onChange={(e)=>sGame(e.target.value)} type="radio" value={item} name="game" />
                                &nbsp; {item}
                            </label>
                            <br />
                        </div>
                    )
                }


                {/* Chose Your Day */}

            <h3>Chose Your Day</h3>
            {
                Day.map((item,i)=>
                <div key={i}>
                    <label>
                    &nbsp;&nbsp;&nbsp;
                        <input disabled={disable} onChange={(e)=>sDay(e.target.value)} type="radio" name="day" value={item}/>
                        &nbsp;  {item}
                    </label>
                </div>
                )
            }

            {/* Display Result */}

            {
                game && day ?
                <>
                <p className="gameResult">You Will Play <b>{game}</b> on <b>{day}</b></p>
                <Button className="confirmGame" onClick={ConfirmGame}>Confirm</Button>
                </>
                :null
            }

            </div>

        </>
    )
}

export default SetMatch