import '../App.css'
import heroImage from '../assets/hero.png'
import heroBlob from '../assets/blob.svg'
const HeroSection = () => {
  return(
    <main>
        <section className="hero-section">
            <div className="info">
                <p>Women</p>
                <h2>Slick. Modern . Awesome.</h2>
                <button className='button1'>Shop Collection</button>
            </div>
            <div className="design">
                <img src={heroBlob} alt=""  className='hero-blob'/>
                <img src={heroImage} alt="" className='hero-img' />

            </div>
        </section>

    </main>
  )
}
export default HeroSection