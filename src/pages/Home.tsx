import ExploreProjects from "../components/Home/ExploreProjects"
import Hero from "../components/Home/Hero"
import Footer from "../components/ui/Footer"
import Navbar from "../components/ui/Navbar"

function Home() {
  return (
    <>
        <Navbar/>
        <div className=' mx-auto mt-40px  ' >
        
        <Hero/>
<ExploreProjects/>
    </div>
    <Footer/>
    </>
   
  )
}

export default Home