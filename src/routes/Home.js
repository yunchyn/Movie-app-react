import { useEffect, useState } from "react";
import Movie from "../components/Movie";
import "../css/Home.css";
import "../css/loading.css";
import Navbar from "../components/Navbar.js";

function Home() {
   const [loading, setLoading] = useState(true);
   const [movies, setMovies] = useState([]);
   const getMovies = async () => {
      const response = await fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=download_count`);
      const json = await response.json();
      setMovies(json.data.movies);
      setLoading(false);
   };
   useEffect(() => {
      getMovies();
   }, []);
   return (
      <div>
         <Navbar />
         {loading ? (
            <div className="loader"></div>
         ) : (
            <div className="container">
               <div className="movies">
                  <p>Check out interesting movies</p>
                  {movies.map((movie) => (
                     <Movie
                        key={movie.id}
                        id={movie.id}
                        coverImg={movie.medium_cover_image}
                        title={movie.title}
                        summary={movie.summary}
                        genres={movie.genres}
                     />
                  ))}
               </div>
            </div>
         )}
      </div>
   );
}
export default Home;
