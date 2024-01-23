import './Footer.css';

const Footer = () => {
    const date = new Date
    const year = date.getFullYear()

    return <footer>
        <div>
            {/* aca van las imagenes de redes sociales + link a ellas */}
        </div>
        <p className='footer-p'>iFio © {year}. All rights reserved.</p>
    </footer>
}

export default Footer;