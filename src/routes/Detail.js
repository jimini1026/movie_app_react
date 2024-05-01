import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BiSolidLike } from "react-icons/bi";
import { FaTag } from "react-icons/fa";
import Loading from "../components/Loading";

const Detail = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setData(json.data.movie);
    setLoading(false);
    console.log(json.data.movie.medium_cover_image);
  };

  useEffect(() => {
    getMovie();
  }, []);

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <div className="bg-neutral-800 min-h-screen flex flex-col gap-10 items-center pb-10">
          <div className="pt-[5rem] flex gap-[7rem] justify-center">
            <img
              className="w-[20rem] rounded-lg shadow-white shadow-lg"
              src={data.medium_cover_image}
              alt={data.title}
            />
            <div className="mt-16 flex flex-col gap-10 w-[22rem]">
              <div className="text-white font-bold text-4xl">
                {data.title_long}
              </div>
              <div className="text-amber-400 flex gap-4">
                <BiSolidLike size="30" />
                <div className="text-xl font-bold">{data.like_count}</div>
              </div>
              <div className="text-white">Runtime : {data.runtime}m</div>
              <div className="text-white">
                <div className="flex gap-2 relative">
                  <FaTag />
                  <div className="relative bottom-1">GENRES</div>
                </div>
                <div>
                  {data.genres.map((g) => (
                    <li key={g}>{g}</li>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-lg py-7 px-8 flex flex-col items-center justify-center w-[50rem] bg-neutral-700">
            <div className="text-white font-bold mb-4">
              rating : {data.rating}
            </div>
            <div className="text-white">{data.description_intro}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Detail;
