import { About } from "./About";
import Contact from "./Contact";
import IoT from "./IoT";
import Navbar from "./Navbar";
import { Services } from "./Services";
import { Team } from "./Team";
import {Hero} from "./Hero";
import Footer from "./Footer";


function Home() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Services/>
      <IoT/>
      <Team/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default Home;