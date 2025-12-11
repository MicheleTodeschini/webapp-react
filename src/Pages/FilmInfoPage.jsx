import Header from "../../components/Header"
import Footer from "../../components/Footer"
import axios from "axios"
import { Link, useParams } from "react-router-dom"
import { useEffect, useState } from "react"


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
            <h3>Vedo il film con id {film.id}</h3>

            <div key={film.id} className="col-4">
                <div className="card-top">
                    <img src={`http://localhost:3000/img/${film.image}`}></img>
                </div>
                <div className="card-bottom">
                    <h3>{film.title}</h3>
                    <p>{film.abstract}</p>
                    <p>{film.director}, {film.genre}, {film.release_year}</p>
                    <Link to={`/FilmInfoPage/${film.id}`}>Click here for seeing more about the film</Link>
                </div>

            </div>

            <Footer />
        </>
    )
}