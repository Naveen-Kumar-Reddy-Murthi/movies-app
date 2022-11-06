import { useGlobalContext } from '../Context.jsx'
import { BsHandThumbsUp } from 'react-icons/bs'
const Movies = () => {
  const { loading, movies, selectMovie } = useGlobalContext();
  const IMAGE_URL = 'https://image.tmdb.org/t/p/w500';
  if (loading) {
    return <section className="section">
      <h4>Loading...</h4>
    </section>
  }
  if (movies.length < 1) {
    return <section className="section">
      <h4>No movies matched your search term.</h4>
    </section>
  }

  return <section className="section-center">
    {
      movies.map((movie) => {
        const { id, title, poster_path: image, release_date: date } = movie;
        return <article key={id} className="single-movie">
          <img src={IMAGE_URL + image} className="img" onClick={() => selectMovie(id)} />
          <footer>
            <h5>{title}</h5>
            <button className='like-btn'><BsHandThumbsUp />
            </button>
          </footer>
        </article>
      })}

  </section>
}

export default Movies