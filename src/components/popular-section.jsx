import '../App.css'
import Product from './product'
const PopularSection =() => {
    return(
        <section className="popular">
            <p className="tag--show">Summer collection</p>
            <h3 className="headding">Popular T-shirts</h3>
            <div className='products-list'>
                <Product />
                <Product />
                <Product />
                <Product />
            </div>
        </section>
        
    )
  
}
export default PopularSection