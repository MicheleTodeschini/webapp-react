import { Link } from "react-router-dom";

export default function Header() {


    return (
        <>
            <h1>Welcome to our films list!</h1>

            <ul>
                <li className="nav-item">
                    <Link to='/' >Home</Link>
                </li>
                <li className="nav-item">
                    <Link to='/FilmInfoPage'>Film Page</Link>
                </li>

            </ul>
        </>
    )
}