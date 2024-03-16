import First from "./First/First"
import Second from "./Second/Second"

 const Home = () => {
  return (
    <div className="home" style={{marginTop:"2rem"}}>
    <section><First/></section>
    <section><Second/></section>
    </div>
  )
}
export default Home