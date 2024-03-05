import React, { useState } from 'react'
import './App.css'

const App = () => {

const [data, setData] = useState(Array(9).fill(''))
const [move, setMove] = useState('X')

const click=(n)=>{

    let square=[...data]

    if(data[n]!==''){
        alert('Already Clicked')
        return
    }

    square[n]=move
    setData(square)
    if(move==='X'){
        setMove('O')
    }else{
        setMove('X')
    }

    if(checkWin(square)){
        alert("Winner")
        square.fill('');
        setData(square)
    }  
    if(checkDraw(square)){
        alert("Match Draw")
        square.fill('');
        setData(square)
    }  
    
}

const checkDraw=(data)=>{
    let count=0;
    data.forEach(element => {
        if(element!==''){
            count++;
        }
    });

    if(count>=9){
        return true;
    }else{
        return false;
    }
}


const checkWin=(data)=>{
        const conditions=[
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
        ]

        let flag=false;
        conditions.forEach(element => {
            if(data[element[0]]!=='' && data[element[1]]!=='' && data[element[2]]!==''){ 
            if(data[element[0]]===data[element[1]] && data[element[1]]===data[element[2]]){
                flag=true;
            }
        }
        });
        return flag;
    }

  return (
    <>
    <h1 className='text-center'>TIC TAC TOE</h1>
    <table>
        <tbody>
            <tr>
                <td onClick={()=>{click(0)}}>{data[0]}</td>
                <td onClick={()=>{click(1)}}>{data[1]}</td>
                <td onClick={()=>{click(2)}}>{data[2]}</td>
            </tr>
            <tr>
                <td onClick={()=>{click(3)}}>{data[3]}</td>
                <td onClick={()=>{click(4)}}>{data[4]}</td>
                <td onClick={()=>{click(5)}}>{data[5]}</td>
            </tr>
            <tr>
                <td onClick={()=>{click(6)}}>{data[6]}</td>
                <td onClick={()=>{click(7)}}>{data[7]}</td>
                <td onClick={()=>{click(8)}}>{data[8]}</td>
            </tr>
        </tbody>
    </table>
    </>
    
  )
}

export default App
