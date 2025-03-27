import './Hero.css'
export default function Hero(){
    return(
<section className="hero">
<div className="hero-content">
  <h1>Welcome to Our Affiliate Site</h1>
  <p>Your one-stop solution for product reviews and recommendations.</p>
  <br></br>
  <button>Learn More</button>
</div>
<div className="hero-image">
<img  width={'65%'} height={'65%'} src="./images/example.png"></img>
</div>
</section>
    )
}