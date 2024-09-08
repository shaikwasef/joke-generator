"use client";

import { jokesApi } from "@/constants";
import axios from "axios";
import { useState } from "react";

export default function Home() {
  const [joke, setJoke] = useState<{ setup: String; punchline: String } | null>(null);

  const fetchJoke = async () => {
    const { data } = await axios.get(jokesApi);
    const { setup, punchline } = data;
    setJoke({ setup: setup, punchline: punchline });
  };

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      {joke && (
        <div>
          <h4>{joke.setup}</h4>
          <p>{joke.punchline}</p>
        </div>
      )}
      <button onClick={fetchJoke}> Click me</button>
    </div>
  );
}

//Create a custom hook for the fetch call
//Include axios for fetch call
//Create a
