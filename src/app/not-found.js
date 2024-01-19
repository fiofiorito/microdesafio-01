import Link from "next/link";
import { Button } from "./Components/Button/Button";

const NotFound = () => {
    return <main>
        <h1>Error 404</h1>
        <p>Page not found</p>
        <Link href='/'><Button btnText='Return to main page' /></Link>
    </main>
}

export default NotFound;