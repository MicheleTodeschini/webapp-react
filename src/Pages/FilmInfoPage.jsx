import Header from "../../components/Header"
import Footer from "../../components/Footer"
import axios from "axios"
import { Link, useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import Homepgae from "./HomePage"


export default function FilmInfoPage() {

    const { id } = useParams()
    const urlFilm = `http://localhost:3000/api/movies/${id}`
    const urlReviews = `http://localhost:3000/api/reviews`

    const [film, setFilm] = useState([])
    const [review, setReview] = useState([])

    useEffect(() => {
        axios
            .get(urlFilm)
            .then(res => setFilm(res.data))
    }, [id])

    useEffect(() => {
        axios.get(urlReviews)
            .then(res => setReview(res.data))
    })

    return (
        <>


            <div className="filmpage-top">

                <h3>Vedo il film con id {film.id}</h3>
                <Link to={'/'}>Return to the HomePage</Link>

            </div>



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

            <div className="review">
                <p>{review.movie_id}</p>
            </div>


            <Footer />
        </>
    )
}