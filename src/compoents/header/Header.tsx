import {Link} from "react-router-dom";


export default function Header(){


    return (
        <header className={"header"}>
            <a className={"logo"}>logo</a>

            <nav>
                <Link className={"navbar"} to={"/"}>Home</Link>
                <Link className={"navbar"} to={"/search"}>Search</Link>
                <Link className={"navbar"} to={"/crud"}>Crud</Link>
            </nav>
        </header>
    )
}
