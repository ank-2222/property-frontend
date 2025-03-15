import Hero from "../components/Home/Hero"
import Navbar from "../components/ui/Navbar"

function Home() {
  return (
    <>
        <Navbar/>
        <div className=' mx-auto mt-40px h-[200vh]' >
        
        <Hero/>

    </div>
    </>
   
  )
}

export default Home