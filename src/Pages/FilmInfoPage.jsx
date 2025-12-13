import Header from "../../components/Header"
import Footer from "../../components/Footer"
import axios from "axios"
import { Link, useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import Homepgae from "./HomePage"


export default function FilmInfoPage() {

    const { id } = useParams()
    const urlFilm = `http://localhost:3000/api/movies/${id}`

    const [film, setFilm] = useState([])

    useEffect(() => {
        axios
            .get(urlFilm)
            .then(res => setFilm(res.data))
    }, [id])

    return (
        <>
            <Header />
            <Link to={'/'}>Return to the HomePage</Link>


            <h3>Vedo il film con id {film.id}</h3>

            <div key={film.id} className="info">
                <div className="card-left">
                    <img src={`http://localhost:3000/img/${film.image}`}></img>
                </div>
                <div className="card-right">
                    <h3>{film.title}</h3>
                    <p>{film.abstract}</p>
                    <p>{film.director}, {film.genre}, {film.release_year}</p>

                </div>

            </div>


            <Footer />
        </>
    )
}