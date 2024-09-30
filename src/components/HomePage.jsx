import './HomePage.css';
import Navigation from './navigation';

function Homepagenav() {
    return (
        <div className="hero">
            <div className="header-navigation">
                <h1 className="logo">MUTC</h1>
                <Navigation />
            </div> 
            <div className="hero-text">
                <h2>Welcome to MUTC</h2>
                <p>Your gateway to technological knowledge and innovation</p>
                <p>Empowering the next generation of tech leaders</p>
            </div>
        </div>
    )
}

function AboutUs() {
    return (
        <section className="about-us">
            <h2 className="about-title">About Us</h2>
            <div className="about-cards">
                <div className="card">
                    <img src="/src/assets/mut.jpg" alt="Philosophy" className="card-image" />
                    <h3>Our Philosophy</h3>
                    <p>Murang’a University of Technology is committed to knowledge creation and advancement through innovative strategies and technologies for prosperity.</p>
                </div>
                <div className="card">
                    <img src="/src/assets/mut.jpg" alt="Mission" className="card-image" />
                    <h3>Our Mission</h3>
                    <p>To advance knowledge and technological transfer through teaching, training, learning, research, innovation, consultancy, and community engagement for sustainable development.</p>
                </div>
                <div className="card">
                    <img src="/src/assets/mut.jpg" alt="Vision" className="card-image" />
                    <h3>Our Vision</h3>
                    <p>A Leading University in Technological Innovation, Research, Training, and Outreach.</p>
                </div>
            </div>
        </section>
    );
}

function Testimonials() {
    return (
        <section className="testimonials">
            <h2 className="testimonials-title">Testimonials</h2>
            <div className="testimonial-cards">
                <div className="testimonial-card">
                    <img src="#" alt="Member 1" className="testimonial-image" />
                    <p className="testimonial-quote"> &quot; MUTC has transformed my understanding of technology and provided me with practical skills.&quot;</p>
                    <h4>John Doe - Alumni</h4>
                </div>
                <div className="testimonial-card">
                    <img src="#" alt="Member 2" className="testimonial-image" />
                    <p className="testimonial-quote">&quot;The community is very supportive, and the projects are relevant to current industry trends.&quot;</p>
                    <h4>Jane Smith - Current Member</h4>
                </div>
                <div className="testimonial-card">
                    <img src="#" alt="Member 3" className="testimonial-image" />
                    <p className="testimonial-quote"> &quot;I gained valuable insights into tech leadership through hands-on training and workshops.&quot;</p>
                    <h4>Michael Brown - Alumni</h4>
                </div>
                <div className="testimonial-card">
                    <img src="#" alt="Member 4" className="testimonial-image" />
                    <p className="testimonial-quote">&quot;Being a part of MUTC has prepared me for a successful tech career.&quot;</p>
                    <h4>Emily Davis - Current Member</h4>
                </div>
                <div className="testimonial-card">
                    <img src="#" alt="Member 5" className="testimonial-image" />
                    <p className="testimonial-quote">&quot;MUTC encouraged me to think outside the box and constantly innovate.&quot;</p>
                    <h4>Chris Johnson - Alumni</h4>
                </div>
                <div className="testimonial-card">
                    <img src="#" alt="Member 6" className="testimonial-image" />
                    <p className="testimonial-quote">&quot;Joining MUTC was one of the best decisions for my tech journey.&quot;</p>
                    <h4>Sarah Wilson - Current Member</h4>
                </div>
            </div>
        </section>
    );
}

function Homepage() {
    return (
        <header>
            <Homepagenav />
            <AboutUs/>
            <Testimonials/>
        </header>
    )
}

export default Homepage;