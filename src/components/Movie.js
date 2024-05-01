import Proptypes from "prop-types";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaTag } from "react-icons/fa";

const Movie = ({ id, coverImg, title, summary, genres }) => {
  const [open, setOpen] = useState(true);
  return (
    <div className="w-[15rem] h-[35rem] flex flex-col items-center">
      <Link to={`/movie/${id}`}>
        <img className="w-[15rem]" src={coverImg} alt={title} />
        <div className="ml-2 text-sm text-zinc-300 font-bold py-3">{title}</div>
      </Link>
      <div className="text-zinc-300 text-sm cursor-pointer flex gap-3 ">
        <FaTag
          className="mt-1"
          size="15"
          onClick={() => setOpen((prev) => !prev)}
        />
        <div>{open && genres.map((g) => <p key={g}>{g}</p>)}</div>
      </div>
    </div>
  );
};
/* Link 컴포넌트를 통해서는 새로고침이 일어나지 않음 */

Movie.propTypes = {
  id: Proptypes.number.isRequired,
  coverImg: Proptypes.string.isRequired,
  title: Proptypes.string.isRequired,
  summary: Proptypes.string.isRequired,
  genres: Proptypes.arrayOf(Proptypes.string).isRequired,
};

export default Movie;
