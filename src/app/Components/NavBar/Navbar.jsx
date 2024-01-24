// style & resources
import './Navbar.css';
import Image from 'next/image';
import NavbarMenu from './NavbarMenu';


export default function Navbar() {
    return <div className='navbar-div'>
        <NavbarMenu />
        <a href='/'><Image className='logo' src={"/house-storm-2-svgrepo-com.png"} width={40} height={40} /></a>

    </div>
}