"use client";

import { withButtonText } from "@/HOCs/withButtonText";
import JokeGenerator from "@/components/joke-generator";

const EnhancedComponent = withButtonText(() => <button>Click me</button>);

export default function Home() {
  return (
    <>
      <EnhancedComponent name="wasef" />
      <JokeGenerator />
    </>
  );
}

//Create a custom hook for the fetch call
//Include axios for fetch call
//Create a
