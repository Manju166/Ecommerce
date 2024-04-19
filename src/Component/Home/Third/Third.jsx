import pData from '../../Data/ProductData';
import './third.scss'
 const Third = () => {
  return (
    <>
    <div className="product">
    <h2>Featured Products</h2>
        <p>Summer Collection New Modern Design</p>
        <div className="pro-container">
        {pData.map((item,id)=>(
            <div className="pro" key={id}>
            <img src={item.image} alt="" />
            <div className="description">
                <h4>{item.pname}</h4>
                <h4>{item.price}</h4>
                </div>
            </div>
        ))}
            
        </div>
    </div>
    </>
  )
}
export default Third;
