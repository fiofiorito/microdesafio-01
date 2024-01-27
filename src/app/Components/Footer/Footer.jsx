import Link from 'next/link';
import './Footer.css';
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
    const date = new Date
    const year = date.getFullYear()

    return <footer>
        <div className='footer-socials'>
            <Link className='footer-socials-link' target='_blank' href='https://www.linkedin.com/in/fiorella-fiorito/'><FaLinkedin /></Link>
            <Link className='footer-socials-link' target='_blank' href='https://www.instagram.com/fioffiiorito/'><FaInstagram /></Link>
            <Link className='footer-socials-link' target='_blank' href='https://github.com/fiofiorito'><FaGithub /></Link>
        </div>
        <p className='footer-p'>iFio © {year}. All rights reserved.</p>
    </footer>
}

export default Footer;