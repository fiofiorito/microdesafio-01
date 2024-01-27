"use client"

import { useState } from 'react'
import './Counter.css'

export function Counter() {
    const [count, setCount] = useState(0)
    const handleSub = () => {
        if (count === 0) {
            setCount(0);
        } else {
            setCount(count - 1)
        }
    }
    const handleAdd = () => {
        setCount(count + 1);
    }
    return <div className='counter-grid'>
        <button className='counter-btn no-border-left' onClick={handleSub}>-</button>
        <p className='counter-num'>{count}</p>
        <button className='counter-btn no-border-right' onClick={handleAdd}>+</button>
    </div>
}