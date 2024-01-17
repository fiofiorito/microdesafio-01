import './Button.css'
import { Asap } from 'next/font/google'

const asap = Asap({ subsets: ['latin'] })

export function Button({ btnText }) {
    return <div className={asap.className}>
        <button className="btn">{btnText}</button>
    </div>
}