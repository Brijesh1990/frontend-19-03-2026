import React from 'react'
import {add,subs,mult,dv} from './CalcApp'
export default function LogicApp() {
  return (
    <div className='app'>
            <h1>Calculate here</h1>
            <button type='button' onClick={add}>Additions</button>
            <button type='button' onClick={subs}>Substraction</button>
            <button type='button' onClick={mult}>Multiplication</button>
            <button type='button' onClick={dv}>Divisions</button>
         </div>

  )
}
