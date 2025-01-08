import { useContext, useEffect } from "react";
import BookSwiper from "./BookSwiper";
import Contact from "./Contact";
import Feature from "./Feature";
import Hero from "./Hero";
import Trending from "./Trending";
import { authContext } from "../context/AuthProvider";

function LandingPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const context = useContext(authContext);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (user) {
      context.setUser(user);
    }
  }, []);

  return (
    <>
      <Hero />
      <Feature />
      <BookSwiper />
      <Trending />
      <Contact />
    </>
  );
}

export default LandingPage;
