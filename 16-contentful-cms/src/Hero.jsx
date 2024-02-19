import heroImg from './assets/hero.svg'
const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Contentful</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            explicabo beatae cum qui saepe! Dolorum accusantium perspiciatis
            natus possimus impedit ipsam dolorem, doloribus asperiores vero
            accusamus soluta optio velit ipsa?
          </p>
        </div>
        <div className="img-container">
          <img src={heroImg} alt="woman and brower" className="img" />
        </div>
      </div>
    </section>
  )
}
export default Hero
