import React, { useEffect, useState } from "react";
import Movie from "../components/Movie";
import Loading from "../components/Loading";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const response = await fetch(
      "https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year"
    );
    const json = await response.json();
    setMovies(json.data.movies);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);
  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <div className="bg-black">
          <div className="py-5 shadow-zinc-500 shadow-2xl bg-black flex flex-col justify-center items-center">
            <div className="text-white text-3xl font-bold">BDD Movie</div>
            <div className="text-amber-400">JIMINI</div>
          </div>
          <div className="grid grid-cols-4 mt-10 justify-items-center items-center">
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
};

export default Home;
