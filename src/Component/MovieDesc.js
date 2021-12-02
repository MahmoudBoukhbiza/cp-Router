import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'


const MovieDesc = () => {
    const location = useLocation()
    const { MovieData } = location.state
    return (
        <div className="MovieDesc">
            <Button variant="primary" size="lg" active>
                <Link to="/"> Home </Link>
            </Button>
            <h1>{MovieData.title}</h1>
            <p>{MovieData.description}</p>
            <img src={MovieData.posterurl} />

        </div>
    )
}

export default MovieDesc
