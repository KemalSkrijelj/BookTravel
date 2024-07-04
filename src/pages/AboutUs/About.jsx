import './About.css';
import img from './imgAbout.png';
function AboutUs() {
  return(
    <>
    <div className='aboutUs'>
    <div className='div-whoWeAre'>
      <h1 style={{textDecoration: "underline"}}>Welcome to CheckInn!</h1>
      <h2>Who We Are:</h2>
    <p className='p-1'>We are a passionate team of travel enthusiasts and tech experts dedicated to revolutionizing the hotel booking experience. 
       Our goal is to empower travelers with the tools and information they need to find and book the perfect stay,
       whether it is a cozy bed and breakfast, a luxury resort, or a budget-friendly inn.</p></div>   

    <h2 style={{fontSize: "35px",marginBottom: "50px"}}>Creators:</h2>
    <div className='abt'>
      <div className="aboutUs-card">
        <img src={img} alt="" />
        <h1>Kemal Skrijelj</h1>
        <p>Student / FrontEnd Developer</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, ullam voluptate.
           Voluptates cupiditate voluptatem deserunt, id excepturi voluptate quod quia?</p>
      </div>
      <div className="aboutUs-card">
        <img src={img} alt="" />
        <h1>Saladin Hodzic</h1>
        <p>Student / FrontEnd Developer</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Alias fugiat laborum velit rerum veniam quos accusamus? Reiciendis dolor porro officia.</p>
      </div>
      </div>
    <h2 style={{marginTop: "70px", textDecoration: "underline"}}>Thank you for choosing CheckInnNow. We look forward to being part of your journey!</h2>
    </div>
    </>
  )
}

export default AboutUs
