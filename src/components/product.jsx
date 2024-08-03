import '../App.css'
import image1 from '../assets/product1.jpg'
const Product = () => {
  return(
    <div className="product">
        <img src={image1} alt=""/>
        <p className='category'>MEN</p>
        <h4>T-shirt Name 10</h4>
        <p className="price">$33.00KSH</p>
        <div className="variations">
            <div className="black"></div>
            <div className="red"></div>
            <div className="white"></div>
        </div>
    </div>
  )
}
export default Product