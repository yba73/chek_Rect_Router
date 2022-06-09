import React, { useState } from "react";
import MovieCard from "./MovieCard";
import Add from "./Add";
import "./MovieList";
import { Route, Routes } from "react-router-dom";
import Information from "./Information";

const MovieList = (props) => {
  const [movieList, setMovieList] = useState([
    {
      title: "The bad guys 2022",
      rating: "6.9",
      etoile: 3,
      id: 0,
      description:
        "After a lifetime of legendary heists, notorious criminals Mr. Wolf, Mr. Snake, Mr. Piranha, Mr. Shark and Ms. Tarantula are finally caught. To avoid a prison sentence, the animal outlaws must pull off their most challenging con yet -- becoming model citizens.",
      img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c7268c79-9436-4230-b75e-2814495b25f4/dewhoi7-e6ac4474-f551-43ea-94c7-70f3a8aa50bf.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2M3MjY4Yzc5LTk0MzYtNDIzMC1iNzVlLTI4MTQ0OTViMjVmNFwvZGV3aG9pNy1lNmFjNDQ3NC1mNTUxLTQzZWEtOTRjNy03MGYzYThhYTUwYmYucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.m-mjbzn_WGZpijffy0F3dzZXDmEuUjA5EDRkIidx7Is",
      trailer: "https://www.youtube.com/embed/m8Xt0yXaDPU",
    },
    {
      title: "Your Name 2016",
      rating: "8.4",
      etoile: 5,
      id: 1,
      description:
        "From director Makoto Shinkai, the innovative mind behind Voices of a Distant Star and 5 Centimeters Per Second, comes a beautiful masterpiece about time.",
      img: "https://img.yts.mx/assets/images/movies/your_name_2016/medium-cover.jpg",
      trailer: "https://www.youtube.com/embed/xU47nhruN-Q",
    },

    {
      title: "A Silent Voice: The Movie 2016",
      rating: "8.1",
      etoile: 5,
      id: 2,
      description:
        "Shouya Ishida starts bullying the new girl in class, Shouko Nishimiya, because she is deaf. But as the teasing continues, the rest of the class starts to turn on Shouya for his lack of compassion.",
      img: "https://img.yts.mx/assets/images/movies/a_silent_voice_2016/medium-cover.jpg",
      trailer: "https://www.youtube.com/embed/nfK6UgLra7g",
    },

    {
      title: "Zootopia 2016",
      rating: "8",
      etoile: 4,
      id: 3,
      description:
        "From the biggest elephant to the tiniest shrew, the city of Zootopia is a beautiful metropolis where all animals live peacefully with one another.",
      img: "https://images-na.ssl-images-amazon.com/images/S/pv-target-images/0ecb745d03d6656e19c12acc7fe9f7a7ba6336a0f2d2c202aff94a8335f00aae._RI_V_TTW_.jpg",
      trailer: "https://www.youtube.com/embed/jWM0ct-OLsM",
    },

    {
      title: "The Book of Life 2014",
      rating: "7.2",
      etoile: 3,
      id: 4,
      description:
        "While visiting a museum, a group of five troubled youth, on detention, are won over by their tour guide, Mary Beth. Part of what wins them over is the story she tells from the Book of Life, which contains all the stories of the world, both true and made-up.",
      img: "https://img.yts.mx/assets/images/movies/The_Book_of_Life_2014/medium-cover.jpg",
      trailer: "https://www.youtube.com/embed/_i69CJc1BgE",
    },

    {
      title: "The Secret World of Arrietty 2010",
      rating: "7.6",
      etoile: 3,
      id: 5,
      description:
        "In Tokyo, twelve-year-old Shô (Tom Holland), a.k.a. Shou (Ryûnosuke Kamiki), a.k.a. Shawn (David Henrie) has a heart condition and is neglected by his parents.",
      img: "https://img.yts.mx/assets/images/movies/Arrietty_2010/medium-cover.jpg",
      trailer: "https://www.youtube.com/embed/VlMe7PavaRQ",
    },
  ]);

  const getAdd = (newMovie) => {
    setMovieList([...movieList, newMovie]);
  };

  return (
    <>
      <div>
        <Add getAdd={getAdd} />
      </div>

      <div className="container">
        {movieList
          .filter(
            (el) =>
              el.etoile >= props.rate &&
              el.title
                .toLocaleLowerCase()
                .includes(props.searching.toLocaleLowerCase().trim())
          )
          .map((el) => (
            <div>
              <Routes>
                <Route
                  path="/"
                  element={<MovieCard key={Math.random()} {...el} />}
                />
              </Routes>
            </div>
          ))}

        <div>
          <Routes>
            <Route
              path="/Information/:id"
              element={<Information movie={movieList} />}
            />

            {/* <Route path="*" element={<Navigate to="/" />} /> */}
          </Routes>
        </div>
      </div>
    </>
  );
};

export default MovieList;
