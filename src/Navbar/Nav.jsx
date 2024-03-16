import "./nav.scss"
import brand from '../assets/brand.jpg'
import {Link} from 'react-router-dom'
const Nav = () => {
  const nv1=[
    {
      name:"Home",
      link:"home"
    },
    {
      name:"Shop",
      link:"shop"
    },
    {
      name:"Blogs",
      link:"blog"
    },
    {
      name:"Contact",
      link:"contact"
    },
   
  ]
  const nv2=[
    {
      name:"Shop",
      link:"shops"
    },
    {
      name:"About",
      link:"about"
    },
  ]
  return (
    <>
        <div className='nav_wrapper'>
           <div className="nav_link1">
           {nv1.map(({name,link},index)=>(
            <Link key={index} className='links' to={link}>{name}</Link>
           ))}
           </div>

            <div className='logo'>
              <Link><img src={brand} height={50}/></Link>
            </div>

           <div className="nav_link2">
           {nv2.map(({name,link},index)=>(
            <Link key={index} className='links' to={link}>{name}</Link>
           ))}
           </div>
        </div>

    </>
  )
}

export default Nav
