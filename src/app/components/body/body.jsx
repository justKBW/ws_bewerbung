"use client";

import Image from "next/image";
import { useState } from "react";

const chuckUrl = "https://api.chucknorris.io/jokes/random";

export function Body() {
  const [joke, setJoke] = useState();
  const fetchJoke = async () => {
    let apidata = await fetch(chuckUrl)
      .then((apiResponse) => apiResponse.json())
      .then((apiResponse) => {
        console.log(apiResponse);
        const joke = apiResponse.value;
        console.log(joke);
        setJoke(joke);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div id="body-main" className="grid grid-cols-5 grid-rows-3 m-4">
      <div id="body-picture" className="col-span-2 row-span-3">
        <Image
          src={"/images/landscape.jpg"}
          width={4096}
          height={1815}
          alt="Picture of a landscape in the evening"
        />
      </div>

      <div
        id="body-button"
        className="col-start-4 col-span-1 row-span-1 m-auto"
      >
        <button
          id="button-quote"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
          onClick={fetchJoke}
        >
          Neue Chuck Norris Fakten
        </button>
      </div>

      <div id="body-joke">
        <p id="joke" className="col-span-3 row-span-2 m-auto">
          {joke}
        </p>
      </div>
    </div>
  );
}
