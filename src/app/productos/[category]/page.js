import { Button } from "@/app/Components/Button/Button";
import Link from "next/link";

const Category = ({ params }) => {
    return <div>
        <p>Categoria: {params.category}</p>
        <Link href='/productos'><Button btnText='Volver a productos' x c /></Link>
    </div>
}

export default Category;