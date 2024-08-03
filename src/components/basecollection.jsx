import collectionImg from '../assets/collection-02.jpg'
import '../App.css'
const BaseCollection = () => {
  return(
    <section className="base-collection">
        <div className="cont1">
            <img src={collectionImg} />
            <p className='tag--show'>MEN</p>
            <h3 className="heading"> The base collection - ideal every day.</h3>
            <button className="button1"> shop Now</button>
        </div>
        <div className="cont2">
            <img src={collectionImg} />
        </div>
    </section>
  )
}
export default BaseCollection