"use client";

import { jokesApi } from "@/constants";
import { memo } from "react";
import useApi from "@/hooks/useApi";

const JokeGenerator = memo(() => {
  const { data, isLoading, error } = useApi<{ setup: string; punchline: string }>({ url: jokesApi, method: "get" });

  if (isLoading) {
    return <h4>Loading...</h4>;
  }

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h4>{data?.setup}</h4>
      <h5>{data?.punchline}</h5>
    </div>
  );
});

export default JokeGenerator;

//Create a custom hook for the fetch call
//Include axios for fetch call
//Create a
