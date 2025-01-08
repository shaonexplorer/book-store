import { Outlet } from "react-router";
import Header from "./Header";
import Footer from "./Footer";

function Home() {
  return (
    <div className=" flex flex-col h-screen">
      <Header />
      <div className="inline-block flex-1">
        <Outlet />
      </div>

      <Footer />
    </div>
  );
}

export default Home;
