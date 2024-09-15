import React, { useState } from "react";
import Header from "../Header";

function TicTacToe() {
    const [boxes, setBoxes] = useState(Array(9).fill(''));
    const [cond,setCond]=useState(true)
    const [Player1,setPlayer1]=useState('')
    const [Player2,setPlayer2]=useState('')
    const [name1,setName1]=useState('')
    const [name2,setName2]=useState('')
    const [disable1,setDisable1]=useState(false)
    const [disable2,setDisable2]=useState(false)
    const [Xwin, setXwin] = useState(0);
    const [Owin, setOwin] = useState(0);
    const [draws, setDraws] = useState(0);
    const [drwVal,setDrwVel]=useState('Draw : ')
    
    // console.log(Player1,Player2);
    

    let winnerCombinations =[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]

    const checkWinner=()=>{
    for(let i=0;i<winnerCombinations .length;i++){
      let [a,b,c] = winnerCombinations [i]
      if(boxes[a] !='' && boxes[b] !='' && boxes[c] !=''){
        if(boxes[a]===boxes[b]&& boxes[b]===boxes[c]){
            return boxes[a]
        }
      }
    }
    return boxes.includes('') ? false : 'Draw';
}

    let result=checkWinner()

    const handleClick = (index) => {
        if (boxes[index] || result) return;
        const newBoxes = [...boxes];
        newBoxes[index] = cond ? 'X' : 'O';
        setBoxes(newBoxes);
        setCond(!cond)

    };


    function UpdateScore(){
        if (result === 'X') {
            setXwin(Xwin + 1);
        } else if (result === 'O') {
            setOwin(Owin + 1);
        } else if (result === 'Draw') {
            setDraws(draws + 1);
        }
    }

    function newGame(){
        UpdateScore()
        setBoxes(Array(9).fill(''));
        setCond(true);  
        setDrwVel('Draw : ')
    }

    function restGame(){
        setBoxes(Array(9).fill(''));
        setCond(true);  
        setName1('')
        setName2('')
        setDisable1('')
        setDisable2('')
        setXwin('')
        setOwin('')
        setDraws('')
        setDrwVel('')
    }


    function handelTaskVal1(e){
        if(e.key==='Enter'){
            e.preventDefault()
            setName1(Player1);
            setPlayer1('')
            setDisable1(true)
            
        }
    }


    function handelTaskVal2(e){
        if(e.key==='Enter'){
            e.preventDefault()
            setName2(Player2);
            setPlayer2('')
            setDisable2(true)
            
        }
    }    

    return (
        <>
            <Header />
            <div className='UpperStopWatch'>
                {

                    // Winner Section

                    result?
                    <>
                    <h1>{result === 'Draw' ? "It's a Draw!" : result === 'X' ? `${name1} Wins!` : `${name2} Wins!`}</h1>
                    <button className="btn" onClick={()=>newGame()}><b className="btnTxt">New Game</b></button>
                    </>
                    :
                    <>

                    {/* Input Section */}

                    <input className="inputTxt" disabled={disable1} placeholder="Player 1" type="text" value={Player1} onChange={(e)=>setPlayer1(e.target.value)} onKeyDown={handelTaskVal1}/>
                    <input className="inputTxt right" disabled={disable2} placeholder="Player 2" type="text" value={Player2} onChange={(e)=>setPlayer2(e.target.value)} onKeyDown={handelTaskVal2}/>

                    {/* Score Section */}

                    <h4 className="plyrName">{name1} {Xwin !== 0 ? Xwin :null}</h4> 
                    {draws !== 0 ? <h3 className="plyrName draw">{drwVal} {draws}</h3> :null}
                    <h4 className="plyrName rightName">{name2} {Owin !== 0 ? Owin :null}</h4>

                    {/* Game Section */}

                    <h1>Tic Tac Toe Game</h1>
                    <h2>{cond && name1 && name2 ? `${name1}` : `${name2}`} {name1 && name2 ? "Your Turn" :null}</h2>
                <div className="boxs">
                    {
                    boxes.map((box, index) => (
                        <button key={index} className="box" onClick={() => handleClick(index)}>{box}</button>
                    ))
                    }
                    <button className="btn" onClick={()=>restGame()}><b className="btnTxt">Reset Game</b></button>
                </div>
                    </>
                }
            </div>
        </>
    );
}

export default TicTacToe;