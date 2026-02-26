import { Suspense } from "react";
import "./App.css";
import Countries from "./components/Countries/Countries";

const fetchCountries = async () => {
  const res = await fetch("https://openapi.programming-hero.com/api/all");
  return res.json();
};

function App() {
  const countries = fetchCountries();
  return (
    <>
      <Suspense fallback={<p>Countries All Loading...</p>}>
        <Countries countriesPromise={countries}></Countries>
      </Suspense>
    </>
  );
}

export default App;
