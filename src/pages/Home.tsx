import AboutUs from "../components/Home/AboutUs"
import Banner from "../components/Home/Banner"
import ExploreProjects from "../components/Home/ExploreProjects"
import ExploreProperties from "../components/Home/ExploreProperties"
import Hero from "../components/Home/Hero"
import Services from "../components/Home/Services"
import Footer from "../components/ui/Footer"
import Navbar from "../components/ui/Navbar"

function Home() {
  return (
    <>
        <Navbar/>
        <div className=' mx-auto mt-40px  ' >
        
        <Hero/>
<ExploreProjects/>
<AboutUs/>
<Services/>
<Banner/>
<ExploreProperties/>
    </div>
    <Footer/>
    </>
   
  )
}

export default Home