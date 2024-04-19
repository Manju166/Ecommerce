import { Link } from "react-router-dom"
import allData from "../Data/ShopData"
import {Pagination} from 'antd'
import './shop.scss'
 const Shop = () => {
  return (
    <>
     <div className ="shopcontent">
        <h2>Super value deals</h2>
        <h1>On all products</h1>
        <p>Save more with coupons & up to 70% off!</p>
    </div>
    <div className="shoproduct">
        <h1>Featured Products</h1>
        <p>New Modern Designs and Comfortable</p>
    </div>
        <div className="shopro-container">
        {allData.map((d,index)=>(
            <div className="shopro" key={index}>
            <img src={d.image} alt="" />
            <div className="desc">
                <h4>{d.pname}</h4>
                <div className="rating">
                ⭐⭐⭐⭐⭐
            </div>
                <h4>{d.price}</h4>
                </div>
                <Link className='carts'>{d.cicon}</Link>
            </div>
        ))}
        </div>
        <Pagination defaultCurrent ={1} total={3}/>
    </>
  )
}
export default Shop
