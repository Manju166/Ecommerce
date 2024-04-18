import Blogdata from "../Data/Blogdata"
import './blog.scss'
 const Blog = () => {
  return (
   <>
   <div className="blogcont">
   <h2>#readmore</h2>
    <p>Read all case studies about our products!</p>
   </div><hr/>
    {Blogdata.map((item,id)=>(
   <div className="blog" key={id}>
        <div className="blog-box" >
       <img src={item.image} alt="" />
       </div>
       <div className="blog-boxs">
        <h1>{item.bheading}</h1>
        <p>{item.bdisc}</p>
        </div>
    </div>
    ))}
   </>
  )
}
export default Blog
