import Link from 'next/link';
import './ProductCard.css'
import Image from "next/image";

const ProductCard = ({ id, img, name, desc, price, link, linkTxt }) => {
    return <div key={id} className="product-card">
        <Image src={img} width={200} height={200} alt="electrodomesticos" />
        <h3 className="prod-name">{name}</h3>
        <p className="prod-desc">{desc}</p>
        <h4 className="prod-price">{price}</h4>
        <Link href={`/productos/${encodeURIComponent(link)}`}>{linkTxt}</Link>
    </div>
}

export default ProductCard;