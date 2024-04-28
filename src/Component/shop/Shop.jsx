import Product from "./Products/Product"
import Rec from "./Recommended/Rec"
import Shopfirst from "./Shopfirst"
import Color from "./color/Color"
 const Shop = () => {
  return (
    <>
    <Shopfirst/>
    <Rec/>
    <div style={{display:"flex"}}>
    <Color/>
        <Product className="prodiv"/>
    </div>
    </>
  )
}
export default Shop
