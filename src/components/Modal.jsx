import {useGlobalContext} from '../Context'
import {SiRottentomatoes, SiImdb} from 'react-icons/si'
import {GiDuration} from 'react-icons/gi'
import { Badge, Pill } from 'evergreen-ui'
const Modal = () => {
 const IMAGE_URL = 'https://image.tmdb.org/t/p/w500';
 const {selectedMovie, closeModal} = useGlobalContext();
 const {id, title, tagline, overview, popularity, release_date : releaseDate, runtime, vote_average : voteAvg,
        vote_count : voteCount, poster_path : posterImage, genres, cast, crew} = selectedMovie;
 let formattedDate;

  const key = 'job';

const uniqueCrew = [...new Map(crew.map(item =>
  [item[key], item])).values()];

console.log(uniqueCrew);
  
  return <aside className='modal-overlay'>
    <div className='modal-container'>
      <img src={IMAGE_URL+posterImage} className="img modal-img" />
      <div className='modal-content'>
        <div className="flexbox-container">
        <h4 style={{ marginRight: '1rem' }}>{title}</h4>
         <h4>({releaseDate})</h4>
        </div>
        <h5 className='text-small'>{tagline}</h5>
       <div className="flexbox-container">
         {genres.map((genre) => 
          <p style={{ marginRight: '0.1rem' }}><Badge key={genre.id} color="black">{genre.name}</Badge></p>)} <p></p>
       </div>
        <p> {overview}</p>  
       <div className="flexbox-container">
         <SiRottentomatoes style={{ marginRight: '0.1rem' }}/> <Pill color="black"> {popularity+'%'} </Pill>
         <SiImdb style={{  marginRight: '0.1rem', marginLeft: '5rem' }}/> <Pill color="black">{voteAvg}</Pill> 
         <GiDuration style={{ marginRight: '0.1rem', marginLeft: '5rem' }}/><Pill color="black"> {runtime}</Pill>
         
       </div>
        <p></p>
         <h5 className='text-small'>Cast</h5>
          <div className="flexbox-container">
            {cast.map((cas) => 
          <article key={cas.id} className="single-cast">
            <header>
             <h5 className='text-small'>{cas.name} </h5>
            </header>
          <img src={IMAGE_URL + cas.profile_path} className="img1"/>
          <footer>
            <h5 className='text-small'> {'As '+cas.character}</h5>
          </footer>
        </article>
                     ) }</div>
         <p></p>
         <h5 className='text-small'>Crew</h5>
          <div className="flexbox-container">
            {uniqueCrew.map((cre) => 
          <article key={cre.id} className="single-cast">
            <header>
             <h5 className='text-small'>{cre.name} </h5>
            </header>
          <img src={IMAGE_URL + cre.profile_path} className="img1"/>
          <footer>
            <h5 className='text-small'>{cre.job}</h5>
          </footer>
        </article>
                     ) }</div>
        <button className="btn btn-hipster close-btn" onClick={closeModal}>close</button>
      </div>
    </div>
  </aside>
}
export default Modal