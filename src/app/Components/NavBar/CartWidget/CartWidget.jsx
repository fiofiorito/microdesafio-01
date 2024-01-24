import './CartWidget.css';
import { BsCart4 } from "react-icons/bs";

export default function CartWidget() {
    return <div className='cart-widget'>
        <BsCart4 /><span>0</span>
    </div>
}
