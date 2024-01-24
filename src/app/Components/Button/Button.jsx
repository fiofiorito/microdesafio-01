'use client'
import './Button.css'
import { Asap } from 'next/font/google'

const asap = Asap({ subsets: ['latin'] })

export default function Button({ cName, btnText, func }) {
    return <div className={asap.className}>
        <button onClick={func} className={`btn ${cName}`}>{btnText}</button>
    </div>
}