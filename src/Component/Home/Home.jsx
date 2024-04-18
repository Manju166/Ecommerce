import First from "./First/First"
import Second from "./Second/Second"
import Third from "./Third/Third"
import Summer from "./summer/Summer"
import Forth from './forth/Banner'
import Banner2 from "./banner2/Banner2"
 const Home = () => {
  return (
    <div className="home" style={{marginTop:"2rem"}}>
    <section><First/></section>
    <section><Second/></section>
    <section><Third/></section>
    <section><Forth/></section>
    <section><Summer/></section>
    <section><Banner2/></section>
    </div>
  )
}
export default Home