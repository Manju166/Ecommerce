import Search from '../shop/Search/Search'
 const Shopfirst = () => {
  return (
    <>
        <div className ="pcontent">
        <h2>Super value deals</h2>
        <h1>On all products</h1>
        <p>Save more with coupons & up to 70% off!</p>
    </div>
    <div className="product">
        <h1>Featured Products</h1>
        <p>New Modern Designs and Comfortable</p>
    </div>
    <div className="pSearch">
    <Search/>
    </div>
    </>
  )
}
export default Shopfirst
