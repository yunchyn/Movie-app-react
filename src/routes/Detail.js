import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../css/loading.css";
import "../css/Detail.css";
import Navbar from "../components/Navbar.js";

function Detail() {
   const [loading, setLoading] = useState(true);
   const [movie, setMovie] = useState([]);
   const { id } = useParams();

   const getMovie = async () => {
      const response = await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`);
      const json = await response.json();
      setMovie(json.data.movie);
      setLoading(false);
   };

   useEffect(() => {
      getMovie();
   }, []);

   return (
      <div>
         <Navbar />
         {loading ? (
            <div className="loader"></div>
         ) : (
            <div>
               <div className="container">
                  <div className="movie-detail">
                     <img
                        id="bgimg"
                        src={movie.background_image}
                        alt={movie.title_long}
                     />
                     <div className="movie-content">
                        <div className="movie-detail-thumbnail">
                           <img
                              src={movie.medium_cover_image}
                              alt={movie.title}
                           />
                        </div>
                        <div className="movie-description">
                           <h1>{movie.title}</h1>
                           <div id="movie-feature">
                              {movie.year} · {movie.runtime}minutes · ⭐{movie.rating} · {movie.genres[0]}
                              {/* {movie.genres.map((genre, index) => (
                                 <span key={genre}>
                                    {genre}
                                    {index < movie.genres.length - 1 && " · "}
                                 </span>
                              ))} */}
                           </div>
                           <p>{movie.description_full}</p>
                           <button onClick={() => window.open(movie.url, "_blank")}>Watch now ▶</button>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         )}
      </div>
   );
}

export default Detail;
