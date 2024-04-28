// import Search from '../Search/Search'
import allData from '../../Data/ShopData'
import './product.scss'
import { Link } from 'react-router-dom'
 const Product = () => {
  return (
    <>
   
        <div className="ppro-container">
        {allData.map((d,index)=>(
            <div className="ppro" key={index}>
            <img src={d.image} alt="" />
            <div className="desc">
                <h4>{d.pname}</h4>
                <div className="rating">
                ⭐⭐⭐⭐⭐
            </div>
                <del>{d.prevprice}</del>  {d.newprice}
                </div>
                <Link className='carts'>{d.cicon}</Link>
            </div>
        ))}
        </div>
    </>
  )
}
export default Product