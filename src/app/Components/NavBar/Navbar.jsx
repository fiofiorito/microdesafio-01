// style & resources
import './Navbar.css';
import Image from 'next/image';
import { NavbarMenu } from './NavbarMenu';


export function Navbar() {
    return <div className=''>
        <NavbarMenu />
        {/* <Image src={"/house-storm-2-svgrepo-com.png"} width={40} height={40} /> */}
    </div>
}