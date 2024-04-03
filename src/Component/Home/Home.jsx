import First from "./First/First"
import Second from "./Second/Second"
import Third from "./Third/Third"
import Banner from "./forth/Banner"
import Summer from "./summer/Summer"

 const Home = () => {
  return (
    <div className="home" style={{marginTop:"2rem"}}>
    <section><First/></section>
    <section><Second/></section>
    <section><Third/></section>
    <section><Banner/></section>
    <section><Summer/></section>
    </div>
  )
}
export default Home