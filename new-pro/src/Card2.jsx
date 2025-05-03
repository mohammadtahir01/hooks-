import { useState } from 'react';
// import './App.css'
import Card from './Card1';

function Card2() {
  const [count1, setCount] = useState('')

  return (
    <>
      <Card name={count1} val={setCount}/>
      <Card name={count1} val={setCount}/>
    </>
  )
}

export default Card2