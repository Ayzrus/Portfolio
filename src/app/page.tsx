"use client";
import { useEffect, useState } from "react";
import Landpage from "./Components/landpage";
import Navbar from "./Components/navbar";
import Loader from "./Components/Loader";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simula um tempo de carregamento
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Navbar />
          <Landpage />
        </>
      )}
    </div>
  );
}
