import Header from "../../components/Header"
import Footer from "../../components/Footer"
import { useEffect, useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"


export default function Homepgae() {

    const [films, setFilms] = useState([])

    const url = 'http://localhost:3000/api/movies/'

    useEffect(getFilms, [])

    function getFilms() {
        axios
            .get(url)
            .then(res => setFilms(res.data))
    }

    return (
        <>
            <Header />
            <div className="container">
                <div className="row">
                    {
                        films.map(film => (
                            <div key={film.id} className="col-4 card py-3">
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
                        ))
                    }
                </div>
            </div>


            <Footer />
        </>
    )
}